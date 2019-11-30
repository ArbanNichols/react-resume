const path = require('path');
const webpack = require('webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/');
const HOME_DIR = path.resolve(__dirname, './src/jsx/layout/Intro.jsx');
const RESUME_DIR = path.resolve(__dirname, './src/jsx/layout/Resume.jsx');

module.exports = {
  entry: {
    main: ['core-js-bundle', '@babel/polyfill', APP_DIR],
    intro: HOME_DIR,
    resume: RESUME_DIR
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:9].js',
    chunkFilename: '[name].[hash:9].js'
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024,
          noquotes: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/static' }]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.ProvidePlugin({
      PropTypes: 'prop-types'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: `./bundle-analysis.html`
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
