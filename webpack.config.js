const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Template",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {                
        test: [/.css$|.scss$/],                
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]     
      }
    ]
  }

};


