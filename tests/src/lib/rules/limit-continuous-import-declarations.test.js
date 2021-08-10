/**
 * @fileoverview limit the number of continuous import declarations
 * @author wtlin1228
 */

import { RuleTester } from "eslint";
import rule from "rules/limit-continuous-import-declarations";

const ruleTester = new RuleTester({
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    requireConfigFile: false,
  },
});

const generateNewLine = () => "\n";

const generateImportDeclarations = (n, offset = 0) =>
  Array.from(
    { length: n },
    (_, i) => `import foo${i + offset} from 'foo';`
  ).join("\n");

const generateLazyImportDeclarations = (n, offset = 0) =>
  Array.from(
    { length: n },
    (_, i) => `const foo${i + offset} = lazyLoad(() => import('foo'));`
  ).join("\n");

const generateErrorMessages = (n) =>
  Array.from({ length: n }, () => ({
    message: "Too many continuous import declarations",
  }));

ruleTester.run("continuous-import-declarations", rule, {
  valid: [
    {
      code:
        generateNewLine() +
        generateImportDeclarations(3) +
        generateNewLine() +
        generateNewLine() +
        generateImportDeclarations(3, 3),
      options: [{ limit: 3 }],
    },
    {
      code:
        generateNewLine() +
        generateImportDeclarations(1) +
        generateNewLine() +
        generateLazyImportDeclarations(1, 1),
      options: [{ limit: 3 }],
    },
  ],

  invalid: [
    {
      code: generateNewLine() + generateImportDeclarations(6),
      options: [{ limit: 3 }],
      errors: generateErrorMessages(3),
    },
    {
      code: generateNewLine() + generateLazyImportDeclarations(6),
      options: [{ limit: 3 }],
      errors: generateErrorMessages(3),
    },
    {
      code:
        generateNewLine() +
        generateImportDeclarations(3) +
        generateNewLine() +
        generateLazyImportDeclarations(3, 3),
      options: [{ limit: 3 }],
      errors: generateErrorMessages(3),
    },
    {
      code:
        generateNewLine() +
        generateImportDeclarations(3) +
        generateNewLine() +
        generateNewLine() +
        generateLazyImportDeclarations(5, 3),
      options: [{ limit: 3 }],
      errors: generateErrorMessages(2),
    },
  ],
});
