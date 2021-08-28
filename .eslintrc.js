module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "space-before-function-paren": ["error"],
    "vue/component-definition-name-casing": ["error", "kebab-case"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    'no-underscore-dangle': 'off',
  },
}
