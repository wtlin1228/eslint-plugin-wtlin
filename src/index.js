export const rules = {
  "limit-continuous-import-declarations": require("./lib/rules/limit-continuous-import-declarations"),
  "place-hooks-arguments-in-new-line": require("./lib/rules/place-hooks-arguments-in-new-line"),
  "parameter-of-custom-apollo-hooks": require("./lib/rules/parameter-of-custom-apollo-hooks"),
};

export const configs = {
  recommended: require("../config/recommended"),
};
