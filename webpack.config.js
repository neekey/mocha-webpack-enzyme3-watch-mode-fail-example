var path = require('path');
var webpack = require('webpack');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
var buildPath = path.resolve(__dirname, 'dist');
var srcPath = path.resolve(__dirname, 'src');
var scssPath = path.resolve(srcPath);
var autoprefixer = require('autoprefixer');
var nodeModulePath = path.resolve(__dirname, 'node_modules');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var IS_PRODUCTION = process.env.NODE_ENV === 'production';

var webpackConfig = {
  entry: {
  },
  output: {
    path: buildPath,
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        include: srcPath,
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "env", {
                    "modules": false,
                  },
                ],
                'react',
                'stage-0',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { minimize: IS_PRODUCTION } },
          { loader: 'postcss-loader', options: { plugins: () => [autoprefixer] } },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              minimize: IS_PRODUCTION,
              module: true,
              camelCase: true,
              localIdentName: '[local]-[hash:5]',
            }
          },
          { loader: 'postcss-loader', options: { plugins: () => [autoprefixer] } },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [scssPath, nodeModulePath],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
  plugins: [
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest',
    }),
  ],
  resolve: {
    unsafeCache: !IS_PRODUCTION,
    modules: [
      'node_modules',
      srcPath,
    ],
  },
  devServer: {
    disableHostCheck: true,
  }
};

module.exports = webpackConfig;
