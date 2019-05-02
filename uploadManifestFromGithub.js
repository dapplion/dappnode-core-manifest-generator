const getGithubAsset = require("./getGithubAsset");
const ipfs = require("./ipfs");

getGithubAsset({
  dnp: "ethchain",
  tag: "v0.2.0",
  fileName: "dappnode_package.json"
})
  .then(manifest => ipfs.addObj(manifest))
  .then(console.log);
