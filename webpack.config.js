const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', //production
  target: 'node',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: [
        /node_modules/,
        /\.test.ts?$/
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'pm2-process.yml', to: path.resolve('dist') }
      ]
    })
  ]
};
