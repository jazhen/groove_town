const path = require('path');

module.exports = {
  mode: 'none',
  context: __dirname,
  entry: './frontend/groove_town.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.js?x$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  devtool: 'source-map',
};
