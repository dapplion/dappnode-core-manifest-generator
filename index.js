const generateCoreManifest = require("./generateCoreManifest");

generateCoreManifest({
  "bind.dnp.dappnode.eth": "v0.2.0",
  "ipfs.dnp.dappnode.eth": "v0.2.0",
  "ethchain.dnp.dappnode.eth": "v0.2.0",
  "ethforward.dnp.dappnode.eth": "v0.2.0",
  "vpn.dnp.dappnode.eth": "v0.2.0",
  "wamp.dnp.dappnode.eth": "v0.2.0",
  "admin.dnp.dappnode.eth": "v0.2.0",
  "dappmanager.dnp.dappnode.eth": "v0.2.0",
  "wifi.dnp.dappnode.eth": "v0.2.0"
})
  // Display resulting hash of the core manifest
  .then(hash => {
    console.log(`
  Uploaded core manifest successfully!

  https://ipfs.io/ipfs/${hash}

  /ipfs/${hash}
  `);
  });
