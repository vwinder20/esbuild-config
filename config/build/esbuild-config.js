const ESBuild = require("esbuild");
const path = require("path");

module.exports = {
  outdir: path.resolve(__dirname, "..", "..", "build"),
  entryPoints: [path.resolve(__dirname, "..", "..", "src", "index.js")],
  entryNames: "bundle",
  bundle: true,
  loader: {
    ".js": "jsx",
    ".png": "file",
    ".svg": "file",
    ".jpg": "file",
  },
  minify: false,
  sourcemap: true,
};
