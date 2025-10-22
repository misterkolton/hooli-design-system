import typescript from 'rollup-plugin-typescript2'
import ttypescript from 'ttypescript'
import babel from '@rollup/plugin-babel'
import pkg from './package.json' with { type: 'json' }

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json']
const input = 'index.ts'

const plugins = [
  typescript({
    typescript: ttypescript,
    extensions,
  }),
  babel({
    extensions,
    presets: ['@babel/preset-react', '@emotion/babel-preset-css-prop'],
  }),
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: false,
    },
    plugins,
    external: [
      'react-use-dimensions',
      'react',
      'framer-motion',
      'color',
      'fast-deep-equal',
      'react-content-loader',
      'react-eyedrop',
      'react-color',
    ],
  },
]
