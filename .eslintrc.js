module.export = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:vue/recommended',
    'prettier/vue',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier', 'import/typescript','@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
  },
}
