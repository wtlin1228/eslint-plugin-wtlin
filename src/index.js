export const rules = {
  "limit-continuous-import-declarations": require("./lib/rules/limit-continuous-import-declarations"),
  "new-line-before-hooks-dependency": require("./lib/rules/new-line-before-hooks-dependency"),
};

export const configs = {
  recommended: require("../config/recommended"),
};
