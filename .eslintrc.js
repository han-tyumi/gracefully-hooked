module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    paypal: 'readonly',
    PayPal: 'readonly',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
  },
}
