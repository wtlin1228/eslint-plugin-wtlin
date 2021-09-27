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
    {
      // prettier-ignore
      code: [
        '',
        'useEffect(',
        '  () => {' ,
        '    // ...',
        '  },',
        '  []',
        ')',
      ].join("\n"),
    },
    {
      code: "useMemo(() => {}, [])",
    },
    {
      // prettier-ignore
      code: [
        '',
        'useCallback(',
        '  () => {',
        '    // ...',
        '  },',
        '',
        '  []',
        ')',
      ].join("\n"),
    },
    {
      // prettier-ignore
      code: [
        '',
        'useFoo(',
        '  () => {',
        '    // ...',
        '  }, []',
        ')',
      ].join("\n"),
    },
    {
      // prettier-ignore
      code: [
        '',
        'useFoo(() => {',
        '    // ...',
        '  }, []',
        ')',
      ].join("\n"),
    },
  ],

  invalid: [
    {
      // prettier-ignore
      code: [
        '',
        'useEffect(',
        '  () => {',
        '    // ...',
        '  }, []',
        ')',
      ].join("\n"),
      errors: [{ message: "Dependency array should be in a new line" }],
    },
    {
      // prettier-ignore
      code: [
        '',
        'useCallback(() => {',
        '  // ...',
        '}, [])',
      ].join("\n"),
      errors: [{ message: "Dependency array should be in a new line" }],
    },
    {
      // prettier-ignore
      code: [
        '',
        'useMemo(() => {',
        '    // ...',
        '  },                 []',
        ')',
      ].join("\n"),
      errors: [{ message: "Dependency array should be in a new line" }],
    },
  ],
});
