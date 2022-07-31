import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import html from '@web/rollup-plugin-html';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.html',
  output: {
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'dist',
  },
  preserveEntrySignatures: false,

  plugins: [
    esbuild({
      loaders: {
        '.ts': 'ts',
        '.js': 'js',
      },
      target: 'ES2020',
      tsconfig: 'tsconfig.build.json',
    }),
    /** Enable using HTML as rollup entrypoint */
    html({ minify: true }),
    json(),
    /** Resolve bare module imports */
    nodeResolve(),
    /** Minify JS */
    terser(),
    /** Bundle assets references via import.meta.url */
    importMetaAssets(),
    copy({
      targets: [
        { src: 'global.css', dest: 'dist' },
        {
          src: 'node_modules/open-props/**/*.min.css',
          dest: 'dist/node_modules/open-props',
        },
      ],
    }),
  ],
};
