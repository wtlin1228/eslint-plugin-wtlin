export const rules = {
  "limit-continuous-import-declarations": require("./lib/rules/limit-continuous-import-declarations"),
  "new-line-before-hooks-dependency": require("./lib/rules/new-line-before-hooks-dependency"),
  "parameter-of-custom-apollo-hooks": require("./lib/rules/parameter-of-custom-apollo-hooks"),
};

export const configs = {
  recommended: require("../config/recommended"),
};
