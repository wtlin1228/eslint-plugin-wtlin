/**
 * @fileoverview add a new line before hook's dependency array
 * @author wtlin1228
 */

import { RuleTester } from "eslint";
import rule from "rules/new-line-before-hooks-dependency";

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    requireConfigFile: false,
  },
});

ruleTester.run("new-line-before-hooks-dependency", rule, {
  valid: [
    `
      useEffect(
        () => {
          // ...
        },
        []
      )
    `,
    `
      useMemo(() => {}, [])
    `,
    `
      useCallback(
        () => {
          // ...
        },
        
        []
      )
    `,
    `      
      useFoo(
        () => {
          // ...
        }, []
      )
    `,
    `
      useFoo(() => {
          // ...
        }, []
      )
    `,
  ],

  invalid: [
    {
      code: `
        useEffect(
          () => {
            // ...
          }, []
        )
      `,
      errors: [{ message: "Dependency array should be in a new line" }],
    },
    {
      code: `
        useCallback(() => {
          // ...
        }, [])
      `,
      errors: [
        { message: "This function should be in a new line" },
        { message: "Dependency array should be in a new line" },
      ],
    },
    {
      code: `
        useMemo(() => {
          // ...
          },                 []
        )
      `,
      errors: [
        { message: "This function should be in a new line" },
        { message: "Dependency array should be in a new line" },
      ],
    },
    {
      code: `
        useEffect(() => {
          // ...
        },
        [])
      `,
      errors: [{ message: "This function should be in a new line" }],
    },
  ],
});
