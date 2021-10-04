# New Line before Hook's Dependency (new-line-before-hooks-dependency)

Add a new line before hook's dependency to improve the code consistency and readability.

## Rule Details

This rule aims to add a new line before hook's dependency.

Examples of **incorrect** code for this rule:

<!-- prettier-ignore -->
```js
/* eslint new-line-before-hooks-dependency: ["error"] */

useEffect(
  () => {
    // ...
  }, []
);
```

<!-- prettier-ignore -->
```js
/* eslint new-line-before-hooks-dependency: ["error"] */

useEffect(() => {
    // ...
  }, 
  []
);
```

<!-- prettier-ignore -->
```js
/* eslint new-line-before-hooks-dependency: ["error"] */

useCallback(() => {
    // ...
}, []);
```

<!-- prettier-ignore -->
```js
/* eslint new-line-before-hooks-dependency: ["error"] */

useMemo(() => {
    // ...
  },                 []
);
```

Examples of **correct** code for this rule:

<!-- prettier-ignore -->
```js
/* eslint new-line-before-hooks-dependency: ["error"] */

useEffect(
  () => {
    // ...
  },
  []
);
```

<!-- prettier-ignore -->
```js
/* eslint new-line-before-hooks-dependency: ["error"] */

useCallback(
  () => {
    // ...
  },

  []
);
```

```js
/* eslint new-line-before-hooks-dependency: ["error"] */

useMemo(() => {}, []);
```

## When Not To Use It

If you don't want to add a new line before the dependency array of react hooks, you can safely turn this rule off.
