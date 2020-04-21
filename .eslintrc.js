module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "prettier/vue",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 2018,
    "warnOnUnsupportedTypeScriptVersion": false,
    "project": './tsconfig.json',
    "tsconfigRootDir": __dirname
  },
  "plugins": [
    "prettier",
    "@typescript-eslint"
  ],
  "rules": {},
}
