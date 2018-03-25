const baseConfig = require('../webpack.config.js');

module.exports = {
  target: 'node',
  module: {
    rules: baseConfig.module.rules,
  },
  resolve: baseConfig.resolve,
  devtool: 'eval',
};
