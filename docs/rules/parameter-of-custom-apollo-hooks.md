# Parameter of Custom Apollo Hooks (parameter-of-custom-apollo-hooks)

Restrict the parameter of custom apollo hooks for consistency.

## Rule Details

This rule aims to restrict that custom apollo hooks will only be called with one object argument.

Examples of **incorrect** code for this rule:

```js
/* eslint parameter-of-custom-apollo-hooks: ["error"] */

useFooQuery([]);
useFooMutation([]);
```

```js
/* eslint parameter-of-custom-apollo-hooks: ["error"] */

useFooQuery({}, {});
useFooMutation({}, {});
```

Examples of **correct** code for this rule:

```js
/* eslint parameter-of-custom-apollo-hooks: ["error"] */

useFooQuery();
useFooMutation();
```

```js
/* eslint parameter-of-custom-apollo-hooks: ["error"] */

useFooQuery({});
useFooMutation({});
```

```js
/* eslint parameter-of-custom-apollo-hooks: ["error"] */

useFooQuery(foo);
useFooMutation(foo);
```

```js
/* eslint parameter-of-custom-apollo-hooks: ["error"] */

useQuery({}, {}, {});
useMutation({}, {}, {});
```

## When Not To Use It

If you don't want to restrict the parameter of custom apollo hooks, you can safely turn this rule off.
