import { dirname, join } from 'path'
const path = require('path')
module.exports = {
  typescript: {
    reactDocgen: 'none',
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-webpack5-compiler-babel',
  ],

  babel: async config => {
    // support for the css props
    if (config.presets === undefined) {
      config.presets = []
    }

    config.presets.push(require.resolve('@emotion/babel-preset-css-prop'))
    config.presets.push(require.resolve('@babel/preset-typescript'))

    return config
  },

  webpackFinal: async config => {
    config.devtool = false
    config.optimization.minimize = false
    // support for absolute references to /src as src/module/name
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src'),
    }
    return config
  },

  docs: {
    autodocs: true,
  },
}
