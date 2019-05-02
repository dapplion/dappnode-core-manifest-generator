const getGithubAsset = require("./getGithubAsset");
const ipfs = require("./ipfs");

const tag = "v0.2.0";

verifyReleases();

/**
 * Make sure the ADMIN release includes a volume section
 */
async function verifyAdmin() {
  const { manifestFromUpload, manifest } = await getBothManifests("admin");
  validateAdminVolumes(manifestFromUpload, "from upload");
  validateAdminVolumes(manifest);
}

function validateAdminVolumes(manifest, id = "\b") {
  const volumes = manifest.image.volumes || [];
  if ((volumes[0] || "").includes("vpndnpdappnodeeth_shared"))
    console.log(`Admin manifest ${id} includes volumes`);
  else
    console.error(
      `ERROR: Admin manifest ${id} does not include the expected volume section`
    );
}

/**
 * Make the manifest's environment is an array
 */
async function verifyEnvironmentArray(dnp) {
  const { manifestFromUpload, manifest } = await getBothManifests(dnp);
  validateEnvironmentAsAnArray(manifestFromUpload, dnp, "from upload");
  validateEnvironmentAsAnArray(manifest, dnp);
}

function validateEnvironmentAsAnArray(manifest, dnp, id = "\b") {
  const environment = manifest.image.environment;
  if (Array.isArray(environment))
    console.log(`${dnp} manifest ${id} has environment as an array`);
  else
    console.error(
      `ERROR: ${dnp} manifest ${id} does NOT has environment as an array`
    );
}

/**
 * Utils
 */

async function getBothManifests(dnp) {
  const [manifestFromUpload, manifest] = await Promise.all([
    getGithubAsset({ dnp, tag, fileName: "upload.json" }).then(data =>
      ipfs.catObj(data.hash)
    ),
    getGithubAsset({ dnp, tag, fileName: "dappnode_package.json" })
  ]);
  return { manifestFromUpload, manifest };
}

async function verifyReleases() {
  await Promise.all([
    verifyAdmin(),
    verifyEnvironmentArray("ethchain"),
    verifyEnvironmentArray("ipfs"),
    verifyEnvironmentArray("wifi")
  ]);
}
