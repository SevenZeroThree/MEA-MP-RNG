var path = require('path');

module.exports = {
  entry: './scripts/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, "scripts")
        ],
        loader: 'babel-loader'
      }
    ]
  }
};