const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = __dirname;

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT, 'dist'),
  },

  entry: {
    main: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, 'public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },

  devtool: 'source-map',
};
