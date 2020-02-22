const path = require("path");
const webpack = require("webpack");

const sourcePath = path.join(__dirname, "/src");
const outputPath = path.join(__dirname, "/dist");

const devServerPort = 8080;
const devServerHostname = "localhost";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: {
    main: "./src/index.js",
    bootstrap: "./src/bootstrap/bootstrap.scss",
    styles: ["./src/css/public.scss", "./src/css/main.css"]
  },
  output: {
    path: outputPath,
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        include: sourcePath
      },
      {
        test: /\.css$/,
        include: sourcePath,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        include: sourcePath,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/,
        include: sourcePath,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|svg|ttf|eot)([\?]?.*)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ],
  devServer: {
    host: devServerHostname,
    port: devServerPort
  }
};
