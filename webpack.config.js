'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
/* global __dirname module require*/
/* eslint comma-dangle: ["error", "never"] */
const path = require('path');

module.exports = {
  entry: ['./src/luding-app.html'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist/',  
  },
  resolve: {
    modules: ['node_modules', 'bower_components'],
    descriptionFiles: ['package.json']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public/',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'public/index.html',
      template: './index.tmpl',
      // minify: process.env.debug ? {} : htmlMinifierOptions,
      // jenkinsBuild: process.env.BUILD_TAG || 'local build',
      generatedAt: new Date()
  }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: ['syntax-dynamic-import']
            }
          },
          {
            loader: 'polymer-webpack-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  }
};
