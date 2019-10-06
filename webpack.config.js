const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {                
        test: [/.css$|.scss$/],                
        use:[                    
         'style-loader',                  
         'css-loader',
         'sass-loader'
        ]                
      }
    ]
  }

};


