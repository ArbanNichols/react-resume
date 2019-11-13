const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['core-js-bundle', APP_DIR],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ico|jpg|png)$/,
        use: [{ loader: 'file-loader', options: {} }],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/static' }]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.ProvidePlugin({
      PropTypes: 'prop-types',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
