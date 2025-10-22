const { override, addBabelPreset, disableEsLint } = require('customize-cra')
module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  disableEsLint(),
)
