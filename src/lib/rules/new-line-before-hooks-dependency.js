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

  function getLinesForArgument(argument) {
    return [argument.loc.start.line, argument.loc.end.line];
  }

  function isHookWithTwoArguments(node) {
    const hookNames = ["useEffect", "useCallback", "useMemo"];
    return looksLike(node, {
      callee: {
        name: (x) => hookNames.includes(x),
      },
      arguments: (xs) => xs.length === 2,
    });
  }

  //----------------------------------------------------------------------
  // Public
  //----------------------------------------------------------------------

  return {
    CallExpression(node) {
      if (!isHookWithTwoArguments(node)) {
        return;
      }

      const [arg1, arg2] = node.arguments;
      const [startOfFirstArg, endOfFirstArg] = getLinesForArgument(arg1);
      const [startOfSecondArg, endOfSecondArg] = getLinesForArgument(arg2);

      const areArgumentsNotInTheSameLine = startOfFirstArg !== endOfSecondArg;
      const isDependencyArrayNotInNewLine = endOfFirstArg === startOfSecondArg;

      if (areArgumentsNotInTheSameLine && isDependencyArrayNotInNewLine) {
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
