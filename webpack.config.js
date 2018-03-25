var webpackConfig = {
  module: {
    rules: [
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
                'stage-0',
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
    ],
  },
  devServer: {
    disableHostCheck: true,
  }
};

module.exports = webpackConfig;
