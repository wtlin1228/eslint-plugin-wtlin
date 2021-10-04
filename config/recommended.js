/**
 * The basics.
 * @type {Object}
 */
module.exports = {
  plugins: ["wtlin"],

  rules: {
    "wtlin/custom-apollo-hooks-max-params": 2,
    "wtlin/limit-continuous-import-declarations": 2,
    "wtlin/parameter-of-custom-apollo-hooks": 2,
    "wtlin/place-hooks-arguments-in-new-line": 2,
  },

  // need all these for parsing dependencies (even if _your_ code doesn't need
  // all of them)
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
