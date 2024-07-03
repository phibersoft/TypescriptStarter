const path = require("path"),
  nodeExternals = require("webpack-node-externals"),
  WebpackShell = require("webpack-shell-plugin-next");

const { NODE_ENV = "development" } = process.env;

const config = {
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: [/[\\/]node_modules[\\/]/],
        loader: "builtin:swc-loader",
        options: {},
      },
    ],
  },
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
};

module.exports = config;
