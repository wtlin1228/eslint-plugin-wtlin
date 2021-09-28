/**
 * @fileoverview parameter of custom apollo hooks
 * @author wtlin1228
 */

import { RuleTester } from "eslint";
import rule from "rules/parameter-of-custom-apollo-hooks";

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    requireConfigFile: false,
  },
});

ruleTester.run("parameter-of-custom-apollo-hooks", rule, {
  valid: [
    {
      code: "useFooQuery()",
    },
    {
      code: "useFooMutation()",
    },
    {
      code: "useFooQuery({})",
    },
    {
      code: "useFooMutation({})",
    },
    {
      code: "useQuery({}, {}, {})",
    },
    {
      code: "useMutation({}, {}, {})",
    },
  ],

  invalid: [
    {
      code: "useFooQuery([])",
      errors: [
        { message: "Custom apollo hooks can only be called with object" },
      ],
    },
    {
      code: "useFooMutation([])",
      errors: [
        { message: "Custom apollo hooks can only be called with object" },
      ],
    },
    {
      code: "useFooQuery({}, {}, {})",
      errors: [
        { message: "Custom apollo hooks can only have one argument" },
        { message: "Custom apollo hooks can only have one argument" },
      ],
    },
    {
      code: "useFooMutation({}, {}, {})",
      errors: [
        { message: "Custom apollo hooks can only have one argument" },
        { message: "Custom apollo hooks can only have one argument" },
      ],
    },
    {
      code: "useFooQuery([], {})",
      errors: [
        { message: "Custom apollo hooks can only be called with object" },
        { message: "Custom apollo hooks can only have one argument" },
      ],
    },
    {
      code: "useFooMutation([], {})",
      errors: [
        { message: "Custom apollo hooks can only be called with object" },
        { message: "Custom apollo hooks can only have one argument" },
      ],
    },
  ],
});
