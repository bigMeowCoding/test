const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const { join } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const compiler = Webpack({
  entry: "./a.js",
  mode: "development",
  plugins: [...[new HTMLWebpackPlugin()]],
  output: { path: join(process.cwd(), "./dist"), filename: "bundle.js" },
});
const devServerOptions = {
  open: true,
  port: 7777,
  host: "0.0.0.0",
};
const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("ssssss");
  // if (openBrowserOpts) {，
  //   openBrowser(urls.localUrlForBrowser);
  // }
  // send({ type: STARTING });
  // if (afterServer) {
  //   afterServer(devServer);
  // }
});
