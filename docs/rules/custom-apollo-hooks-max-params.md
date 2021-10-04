# Custom Apollo Hooks Max Params (custom-apollo-hooks-max-params)

Enforce a maximum number of parameters in custom apollo hooks.

## Rule Details

Custom apollo hooks that take numerous parameters can be difficult to read and write because it requires the memorization of what each parameter is, its type, and the order they should appear in. As a result, many coders adhere to a convention that caps the number of parameters a custom apollo hooks can take.

Examples of **incorrect** code for this rule:

```js
/* custom-apollo-hooks-max-params: ["error"] */

function useFooBarQuery(a, b, c) {}

const useFooBarQuery = (a, b, c) => {};

const useFooBarQuery = function (a, b, c) {};
```

Examples of **correct** code for this rule:

```js
/* custom-apollo-hooks-max-params: ["error"] */

function useFooBarQuery() {}

const useFooBarQuery = () => {};

const useFooBarQuery = function () {};
```

```js
/* custom-apollo-hooks-max-params: ["error"] */

function useFooBarQuery(a) {}

const useFooBarQuery = (a) => {};

const useFooBarQuery = function (a) {};
```

## When Not To Use It

If you don't want to be notified about maximum number of parameters in custom apollo hooks, you can safely turn this rule off.
