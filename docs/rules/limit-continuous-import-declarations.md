# Limit Continuous Import Declarations (limit-continuous-import-declarations)

Too many continuous import declarations may reduce the readability for readers.

## Rule Details

This rule aims to limit the number of continuous import declarations.

Examples of **incorrect** code for this rule:

```js
/* eslint limit-continuous-import-declarations: ["error", { "limit": "3" }] */

import foo0 from "foo";
import foo1 from "foo";
import foo2 from "foo";
import foo3 from "foo";
```

```js
/* eslint limit-continuous-import-declarations: ["error", { "limit": "3" }] */

const foo0 = lazyLoad(() => import("foo"));
const foo1 = lazyLoad(() => import("foo"));
const foo2 = lazyLoad(() => import("foo"));
const foo3 = lazyLoad(() => import("foo"));
```

```js
/* eslint limit-continuous-import-declarations: ["error", { "limit": "3" }] */

import foo0 from "foo";
import foo1 from "foo";
import foo2 from "foo";
const foo3 = lazyLoad(() => import("foo"));
```

```js
/* eslint limit-continuous-import-declarations: ["error", { "limit": "3" }] */
import foo0 from "foo";
import foo1 from "foo";
import foo2 from "foo";

const foo3 = lazyLoad(() => import("foo"));
const foo4 = lazyLoad(() => import("foo"));
const foo5 = lazyLoad(() => import("foo"));
const foo6 = lazyLoad(() => import("foo"));
```

Examples of **correct** code for this rule:

```js
/* eslint limit-continuous-import-declarations: ["error", { "limit": "3" }] */

import foo0 from "foo";
import foo1 from "foo";
import foo2 from "foo";

import foo3 from "foo";
import foo4 from "foo";
import foo5 from "foo";
```

```js
/* eslint limit-continuous-import-declarations: ["error", { "limit": "3" }] */

const foo0 = lazyLoad(() => import("foo"));
const foo1 = lazyLoad(() => import("foo"));
const foo2 = lazyLoad(() => import("foo"));

const foo3 = lazyLoad(() => import("foo"));
const foo4 = lazyLoad(() => import("foo"));
const foo5 = lazyLoad(() => import("foo"));
```

```js
/* eslint limit-continuous-import-declarations: ["error", { "limit": "3" }] */

import foo0 from "foo";
import foo1 from "foo";
import foo2 from "foo";

import foo3 from "foo";
const foo4 = lazyLoad(() => import("foo"));
const foo5 = lazyLoad(() => import("foo"));
```

### Options

The `limit` option accepts number and 10 is the default value.

```js
{
    "rules": {
        "limit-continuous-import-declarations": ["error", { "limit": 5 }]
    }
}
```

## When Not To Use It

If you don't want to be notified about continuous import declarations, you can safely turn this rule off.
