module.exports = {
    "extends": "@atomix/react",
    "env": {
      "browser": true
    },
    "rules": {
      "jsx-a11y/anchor-is-valid": "off",
      "react/prefer-stateless-function": [false, { "ignorePureComponents": true }],
      "react/no-render-return-value": false,
      "react/require-default-props": false,
      "react/jsx-one-expression-per-line": false,
      "no-unused-expressions": 0,
      "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
    }
  }