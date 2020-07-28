const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: path.join(__dirname, "index.tsx"),

  output: {
    filename: "index.js",
    path: path.join(__dirname, "../../app/scripts")
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /.*node_modules.*/
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: /.*node_modules.*/
      }
    ]
  },
};
