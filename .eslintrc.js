// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // aji -17-06-19 -s
    'spaced-comment': 0,
    'comma-dangle': 0,
    'no-eval': 0,
    'no-trailing-spaces': ['error', { "skipBlankLines": true }],
    'no-multiple-empty-lines': 0,
    'padded-blocks': 0,
    // aji -17-06-19 -e

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
