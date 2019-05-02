const ipfs = require("./ipfs");
const getGithubAsset = require("./getGithubAsset");
const referenceManifest = require("./referenceManifest.json");

async function generateCoreManifest(dnpsTags) {
  const dependencies = {};
  try {
    // Fetch manifest from github to get the latest image hash
    const coreManifest = await getGithubAsset({
      dnp: "core",
      tag: "v0.2.0",
      fileName: "dappnode_package.json"
    });

    await Promise.all(
      Object.entries(dnpsTags).map(async ([dnp, tag]) => {
        const data = await getGithubAsset({
          dnp,
          tag,
          fileName: "upload.json"
        });
        console.log(`Fetched ${dnp}: /ipfs/${data.hash}`);
        // res.data.hash = "Qmacb3b32j34..."
        dependencies[dnp] = `/ipfs/${data.hash}`;
      })
    );

    const manifest = {
      ...coreManifest,
      version: "0.2.0",
      dependencies: {
        ...coreManifest.dependencies,
        ...dependencies
      }
    };

    return await ipfs.addObj(manifest);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = generateCoreManifest;
