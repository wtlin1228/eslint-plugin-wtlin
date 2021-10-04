/**
 * @fileoverview add a new line before hook's dependency array
 * @author wtlin1228
 */
"use strict";

import looksLike from "../utils/looksLike";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function create(context) {
  // variables should be defined here

  //----------------------------------------------------------------------
  // Helpers
  //----------------------------------------------------------------------

  const isTargetHook = (x) =>
    ["useEffect", "useCallback", "useMemo"].includes(x);

  const isLengthTwo = (xs) => xs.length === 2;

  function getLinesForNode(node) {
    return [node.loc.start.line, node.loc.end.line];
  }

  //----------------------------------------------------------------------
  // Public
  //----------------------------------------------------------------------

  return {
    CallExpression(node) {
      if (
        !looksLike(node, {
          callee: {
            name: isTargetHook,
          },
          arguments: isLengthTwo,
        })
      ) {
        return;
      }

      const [arg1, arg2] = node.arguments;
      const [startOfCallExpression] = getLinesForNode(node);
      const [startOfFirstArg, endOfFirstArg] = getLinesForNode(arg1);
      const [startOfSecondArg, endOfSecondArg] = getLinesForNode(arg2);

      const isOneLineExpression =
        startOfCallExpression === endOfFirstArg &&
        startOfFirstArg === endOfSecondArg;
      if (isOneLineExpression) {
        return;
      }

      const isCreateFnNotInNewLine = startOfFirstArg === startOfCallExpression;
      if (isCreateFnNotInNewLine) {
        context.report({
          node: arg1,
          message: "This function should be in a new line",
        });
      }

      const isDependencyArrayNotInNewLine = endOfFirstArg === startOfSecondArg;
      if (isDependencyArrayNotInNewLine) {
        context.report({
          node: arg2,
          message: "Dependency array should be in a new line",
        });
      }
    },
  };
}

module.exports = {
  create,
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "add a new line for hook's dependency array",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
};
