/**
 * @fileoverview limit the number of continuous import declarations
 * @author wtlin1228
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function create(context) {
  // variables should be defined here
  const { limit } = context.options[0] || { limit: 10 };
  let continuousImportDeclarations = 0;
  let lastEnd = 0;

  //----------------------------------------------------------------------
  // Helpers
  //----------------------------------------------------------------------

  function findAndReportContinuousImport(node) {
    const [start, end] = node.range;
    if (start !== lastEnd + 1) {
      continuousImportDeclarations = 0;
    }
    continuousImportDeclarations += 1;
    lastEnd = end;

    if (continuousImportDeclarations > limit) {
      context.report({
        node: node,
        message: "Too many continuous import declarations",
      });
    }
  }

  //----------------------------------------------------------------------
  // Public
  //----------------------------------------------------------------------

  return {
    Identifier(node) {
      if (node.name !== "lazyLoad") {
        return;
      }

      const variableDeclaration = node.parent.parent.parent;
      findAndReportContinuousImport(variableDeclaration);
    },
    ImportDeclaration(node) {
      findAndReportContinuousImport(node);
    },
  };
}

module.exports = {
  create,
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "limit the number of continuous import declarations",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        type: "object",
        properties: {
          limit: {
            type: "number",
          },
        },
        additionalProperties: false,
      },
    ], // Add a schema if the rule has options
  },
};
