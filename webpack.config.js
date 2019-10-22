const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './sm/main.js'
  },
  output: {
    path: path.join(__dirname, './sm'),
    filename: '[name].min.js'
  },
  devtool: 'source-map'
};