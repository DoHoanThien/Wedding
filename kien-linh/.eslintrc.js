module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "eslint:recommended"],
  env: {
    browser: true,
    es6: true,
    amd: true
  },
  plugins: ["react", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": 1,
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": "warn",
    "no-use-before-define": [2, { functions: false }],
    semi: [0, "never"],
    trailingComma: 0,
    "react/jsx-no-target-blank": 0,
    "no-alert": 1,
    "react-hooks/exhaustive-deps": "warn"
  }
};
