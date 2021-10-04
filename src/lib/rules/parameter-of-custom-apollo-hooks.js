/**
 * @fileoverview parameter of custom apollo hooks
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

  const isCustomApolloHook = (x) => /^use\w+(Query|Mutation)$/.test(x);

  const isLengthGreaterThanN = (n) => (xs) => xs.length > n;

  //----------------------------------------------------------------------
  // Public
  //----------------------------------------------------------------------

  return {
    CallExpression(node) {
      if (
        !looksLike(node, {
          callee: { name: isCustomApolloHook },
          arguments: isLengthGreaterThanN(0),
        })
      ) {
        return;
      }

      if (isLengthGreaterThanN(1)(node.arguments)) {
        node.arguments.slice(1).forEach((argNode) =>
          context.report({
            node: argNode,
            message: "Custom apollo hooks can only have one argument",
          })
        );
      }

      if (
        node.arguments[0].type !== "Identifier" &&
        node.arguments[0].type !== "ObjectExpression"
      ) {
        context.report({
          node: node.arguments[0],
          message: "Custom apollo hooks can only be called with object",
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
      description: "custom apollo hooks can only be called with one object",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
};
