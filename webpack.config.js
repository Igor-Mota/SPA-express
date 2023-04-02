const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "inline-source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/static", to: "static" },
        { from: "./src/views", to: "views" },
        { from: "./src/modules", to: "modules" },
      ],
    }),
    new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
    }),
  ],
  watch: true,

  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
