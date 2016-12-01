const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: path.normalize(process.cwd()+ '/lib/browser'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
    // @todo implement http://webpack.github.io/docs/list-of-plugins.html#watchignoreplugin to stop watching node-modules
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});

console.log('dev path set to ', path.normalize(process.cwd()+ '/lib/browser'));