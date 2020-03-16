module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
  ],
  plugins: [],
  rules: {
    'no-restricted-exports': ["error", { "restrictedNamedExports": ["default"] }]
  }
}
