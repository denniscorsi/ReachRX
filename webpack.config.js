const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/main.tsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    static: {
      publicPath: path.join(__dirname, 'dist'),
    },
    proxy: [
      {
        context: ['/hi'],
        target: 'http://localhost:3002',
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
};
