/**
 * @fileoverview Rule to flag when a custom apollo hook has too many parameters
 * @author wtlin1228
 */

import { RuleTester } from "eslint";
import rule from "rules/custom-apollo-hooks-max-params";

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    requireConfigFile: false,
  },
});

ruleTester.run("custom-apollo-hooks-max-params", rule, {
  valid: [
    `function useFooBarQuery() {}`,
    `function useFooBarMutation() {}`,
    `function useFooBarQuery(a) {}`,
    `function useFooBarMutation(a) {}`,
    `
      function useFooBarQuery({
        a,
        b,
      } = {}) {}
     `,
    `
      function useFooBarMutation({
        a,
        b,
      } = {}) {}
    `,
    `const useFooBarQuery = () => {}`,
    `const useFooBarMutation = () => {}`,
    `const useFooBarQuery = (a) => {}`,
    `const useFooBarMutation = (a) => {}`,
    `
      const useFooBarQuery = ({
        a,
        b,
      } = {}) => {}
     `,
    `
      const useFooBarMutation = ({
        a,
        b,
      } = {}) => {}
    `,
    `const useFooBarQuery = function() {}`,
    `const useFooBarMutation = function() {}`,
    `const useFooBarQuery = function(a) {}`,
    `const useFooBarMutation = function(a) {}`,
    `
      const useFooBarQuery = function ({
        a,
        b,
      } = {}) {}
     `,
    `
      const useFooBarMutation = function ({
        a,
        b,
      } = {}) {}
    `,
  ],

  invalid: [
    {
      code: `function useFooBarQuery(a, b, c) {}`,
      errors: [{ message: "Custom apollo hook can have one parameter only" }],
    },
    {
      code: `function useFooBarMutation(a, b, c) {}`,
      errors: [{ message: "Custom apollo hook can have one parameter only" }],
    },
    {
      code: `const useFooBarQuery = (a, b, c) => {}`,
      errors: [{ message: "Custom apollo hook can have one parameter only" }],
    },
    {
      code: `const useFooBarMutation = (a, b, c) => {}`,
      errors: [{ message: "Custom apollo hook can have one parameter only" }],
    },
    {
      code: `const useFooBarQuery = function(a, b, c) {}`,
      errors: [{ message: "Custom apollo hook can have one parameter only" }],
    },
    {
      code: `const useFooBarMutation = function(a, b, c) {}`,
      errors: [{ message: "Custom apollo hook can have one parameter only" }],
    },
  ],
});
