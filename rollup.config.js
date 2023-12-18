import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
export default [
  {
    input: './src/index.ts',
    output: {
      dir: 'dist',
      //   file: './dist/index.esm.js',
      format: 'esm',
      globals: {
        html2Canvas: 'html2Canvas',
        jspdf: 'jspdf'
      }
    },
    plugins: [resolve(), commonjs(), typescript(), del({ targets: 'dist/*' }), terser()]
  }
]
