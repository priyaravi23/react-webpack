const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development", // non-minified version
  devServer: {
    port: 9000
  },
  devtool: "source-map"
});
