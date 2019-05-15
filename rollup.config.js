import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

const plugins = [
  replace({
    'process.env.NODE_ENV': 'production',
  }),
  resolve({
    extensions: ['.js', '.jsx'],
  }),
  commonjs({}),
  babel({
    include: ['./components/**'],
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
  }),
];

export default [
  {
    input: './components/Header/index.js',
    output: {
      file: './lib/Header/index.js',
      format: 'esm',
    },
    plugins,
    external: [...Object.keys(pkg.peerDependencies), '../Text'],
  },
  {
    input: './components/Text/index.js',
    output: {
      file: './lib/Text/index.js',
      format: 'esm',
    },
    plugins,
    external: Object.keys(pkg.peerDependencies),
  },
];
