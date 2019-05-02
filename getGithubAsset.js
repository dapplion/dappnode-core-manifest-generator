const axios = require("axios");

/**
 * Fetches a release asset from github
 *
 * @param {string} dnp "admin.dnp.dappnode.eth" or "admin"
 * @param {string} tag "v0.2.0"
 * @param {string} fileName
 * - dappnode_package.json
 * - docker-compose-admin.yml
 * - upload.json
 */
async function getGithubAsset({ dnp, tag, fileName }) {
  const githubName = "DNP_" + dnp.split(".")[0].toUpperCase();
  const url = `https://github.com/dappnode/${githubName}/releases/download/${tag}/${fileName}`;
  const res = await axios.get(url).catch(e => {
    if (e.response.status === 404)
      throw Error(`${githubName} file ${fileName} tag ${tag} is not available`);
    else throw e;
  });
  return res.data;
}

module.exports = getGithubAsset;
