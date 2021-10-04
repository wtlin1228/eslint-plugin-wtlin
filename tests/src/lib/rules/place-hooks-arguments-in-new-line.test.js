/**
 * @fileoverview place hooks' arguments in new line
 * @author wtlin1228
 */

import { RuleTester } from "eslint";
import rule from "rules/place-hooks-arguments-in-new-line";

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    requireConfigFile: false,
  },
});

ruleTester.run("place-hooks-arguments-in-new-line", rule, {
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
      errors: [{ message: "Place this argument in new line" }],
    },
    {
      code: `
        useCallback(() => {
          // ...
        }, [])
      `,
      errors: [
        { message: "Place this argument in new line" },
        { message: "Place this argument in new line" },
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
        { message: "Place this argument in new line" },
        { message: "Place this argument in new line" },
      ],
    },
    {
      code: `
        useEffect(() => {
          // ...
        },
        [])
      `,
      errors: [{ message: "Place this argument in new line" }],
    },
  ],
});
