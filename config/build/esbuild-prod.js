const config = require("./esbuild-config");
const ESBuild = require("esbuild");

const PORT = 3000;
ESBuild.serve(
  {
    servedir: config.outdir,
    port: PORT,
  },
  {
    ...config,
    minify: true,
  }
)
  .then(() => {
    console.log("PROD server: http://localhost:" + PORT);
  })
  .catch((err) => {
    console.log(err);
  });
