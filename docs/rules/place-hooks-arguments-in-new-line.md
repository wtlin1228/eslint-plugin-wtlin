# Place Hooks' Arguments in New Line (place-hooks-arguments-in-new-line)

Add a new line before hook's arguments to improve the code consistency and readability.

## Rule Details

This rule aims to add a new line before arguments of `useEffect`, `useCallback` and `useMemo`.

Examples of **incorrect** code for this rule:

<!-- prettier-ignore -->
```js
/* eslint place-hooks-arguments-in-new-line: ["error"] */

useEffect(
  () => {
    // ...
  }, []
);
```

<!-- prettier-ignore -->
```js
/* eslint place-hooks-arguments-in-new-line: ["error"] */

useEffect(() => {
    // ...
  }, 
  []
);
```

<!-- prettier-ignore -->
```js
/* eslint place-hooks-arguments-in-new-line: ["error"] */

useCallback(() => {
    // ...
}, []);
```

<!-- prettier-ignore -->
```js
/* eslint place-hooks-arguments-in-new-line: ["error"] */

useMemo(() => {
    // ...
  },                 []
);
```

Examples of **correct** code for this rule:

<!-- prettier-ignore -->
```js
/* eslint place-hooks-arguments-in-new-line: ["error"] */

useEffect(
  () => {
    // ...
  },
  []
);
```

<!-- prettier-ignore -->
```js
/* eslint place-hooks-arguments-in-new-line: ["error"] */

useCallback(
  () => {
    // ...
  },

  []
);
```

```js
/* eslint place-hooks-arguments-in-new-line: ["error"] */

useMemo(() => {}, []);
```

## When Not To Use It

If you don't want to add a new line before the arguments of react hooks, you can safely turn this rule off.
