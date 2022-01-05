module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    parserOptions: { requireConfigFile: 'false' },
    babelOptions: { configFile: './.babelrc' }
    // parser: '@babel/eslint-parser'
    // requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/comment-directive': 0,
    'no-tabs': ['error', { allowIndentationTabs: true }]
  }

}
