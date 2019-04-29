const axios = require("axios");
const referenceManifest = require("./referenceManifest.json");
const IPFS = require("ipfs-mini");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https"
});

async function generateCoreManifest(dnpsTags) {
  const dependencies = {};
  try {
    await Promise.all(
      Object.entries(dnpsTags).map(async ([dnp, tag]) => {
        const githubName = "DNP_" + dnp.split(".")[0].toUpperCase();
        const url = `https://github.com/dappnode/${githubName}/releases/download/${tag}/upload.json`;
        const res = await axios.get(url).catch(e => {
          if (e.response.status === 404)
            throw Error(`${githubName} tag ${tag} is not available`);
          else throw e;
        });
        console.log(`Fetched ${githubName}`);
        // res.data.hash = "Qmacb3b32j34..."
        dependencies[dnp] = `/ipfs/${res.data.hash}`;
      })
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  const manifest = {
    ...referenceManifest,
    version: "0.2.0",
    dependencies: {
      ...referenceManifest.dependencies,
      ...dependencies
    }
  };

  const hash = await ipfs.add(JSON.stringify(manifest, null, 2));

  return hash;
}

module.exports = generateCoreManifest;
