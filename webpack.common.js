var path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ }
    ]
  }
};
