var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    bundle: './app.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] // Specify the common bundle's name.
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }
    ]
  }
};