const baseConfig = require('../webpack.config.js');
const nodeExternals = require('webpack-node-externals');

const baseConfigOutput = Object.assign({}, baseConfig);

// sourcemap support for IntelliJ/Webstorm
baseConfigOutput.devtoolModuleFilenameTemplate = '[absolute-resource-path]';
baseConfigOutput.devtoolFallbackModuleFilenameTemplate = '[absolute-resource-path]?[hash]';

module.exports = {
  target: 'node',
  externals: [nodeExternals({
    whitelist: [/^react-dates/,/^antd/],
  })],
  module: {
    rules: baseConfig.module.rules,
  },
  resolve: baseConfig.resolve,
  devtool: 'eval',
};
