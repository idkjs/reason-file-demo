const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const buildPath = path.join(__dirname, 'build');

// module.exports = {
//   entry: {
//     index: './lib/es6/src/Index.bs.js'
//   },
//   mode: isProd ? 'production' : 'development',
//   output: {
//     path: buildPath,
//     filename: '[name].js'
//   }
// }
module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'Index.bs.js')
  },
  output: {
    path: buildPath,
    filename: '[name].js'
  }
  // reso
  // entry: {
  //   main: './lib/es6/src/Index.bs.js',
  // },
  // output: {
  //   path: path.join(__dirname, "bundledOutputs"),
  //   filename: '[name].js',
  // },
};
