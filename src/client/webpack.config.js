const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: path.join(__dirname, "index.tsx"),

  output: {
    filename: "index.js",
    path: path.join(__dirname, "../../app/assets/scripts")
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader"
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
