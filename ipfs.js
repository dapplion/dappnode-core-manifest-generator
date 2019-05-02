const Ipfs = require("ipfs-http-client");
const ipfs = Ipfs("ipfs.infura.io", "5001", { protocol: "https" });

async function add(data) {
  const content = Ipfs.Buffer.from(data);
  const results = await ipfs.add(content);
  return results[0].hash; // "Qm...WW"
}

async function cat(hash) {
  const file = await ipfs.cat(hash);
  return file.toString("utf8");
}

async function addObj(obj) {
  return add(JSON.stringify(obj, null, 2));
}

async function catObj(hash) {
  const data = await cat(hash);
  try {
    return JSON.parse(data);
  } catch (e) {
    console.log(data);
    console.log(e.stack);
  }
}

module.exports = {
  add,
  cat,
  addObj,
  catObj
};
