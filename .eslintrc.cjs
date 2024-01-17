module.exports = {
  root: true,
  env: { browser: true, es2020: true,},
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-hooks/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint'
  ],
  rules: {


  },
  overrides: [

  ],
}
