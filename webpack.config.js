const path = require("path"),
  nodeExternals = require("webpack-node-externals");
const WebpackShell = require("webpack-shell-plugin-next");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/server.ts",
  mode: NODE_ENV,
  target: "node",
  watch: NODE_ENV === "development",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    ...(NODE_ENV === "production"
      ? []
      : [
          new WebpackShell({
            onBuildEnd: {
              scripts: ["npm run start:dev"],
              blocking: false,
              parallel: true,
            },
          }),
        ]),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
};
