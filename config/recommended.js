/**
 * The basics.
 * @type {Object}
 */
module.exports = {
  plugins: ["wtlin"],

  rules: {
    "wtlin/limit-continuous-import-declarations": 2,
    "wtlin/new-line-before-hooks-dependency": 2,
  },

  // need all these for parsing dependencies (even if _your_ code doesn't need
  // all of them)
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
