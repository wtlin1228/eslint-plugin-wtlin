/**
 * @fileoverview Rule to flag when a custom apollo hook has too many parameters
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

  const isLengthGreaterThanOne = (xs) => xs.length > 1;

  const report = (node) =>
    context.report({
      node,
      message: "Custom apollo hook can have one parameter only",
    });

  const checkFunctionDeclaration = (node) => {
    if (
      looksLike(node, {
        id: {
          name: isCustomApolloHook,
        },
        params: isLengthGreaterThanOne,
      })
    ) {
      report(node);
    }
  };

  const checkFunctionExpression = (node) => {
    if (
      looksLike(node, {
        parent: {
          id: {
            name: isCustomApolloHook,
          },
        },
        params: isLengthGreaterThanOne,
      })
    ) {
      report(node);
    }
  };

  //----------------------------------------------------------------------
  // Public
  //----------------------------------------------------------------------

  return {
    FunctionDeclaration: checkFunctionDeclaration,
    ArrowFunctionExpression: checkFunctionExpression,
    FunctionExpression: checkFunctionExpression,
  };
}

module.exports = {
  create,
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "custom apollo hooks can have one parameter only",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
};
