import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'

export default {
  input: {
    index: './src/index.js'
  },
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true
    },
    {
      dir: 'dist/es',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**'
    }),
    commonjs(),
    json()
  ]
}
