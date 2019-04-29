# dappnode-core-manifest-generator

Generates CORE manifest given a set of Github tags defined in `index.js`

```js
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
});
```

## How to use

```bash
git clone https://github.com/dapplion/dappnode-core-manifest-generator.git
cd dappnode-core-manifest-generator
```

Now, edit the index.js versions if you need. Then, run `ìndex.js`

```
node index.js
```

If all tags are available, it will return an output like this:

```bash
user:~/dappnode-core-manifest-generator$ node index.js
Fetched DNP_ETHFORWARD
Fetched DNP_ETHCHAIN
Fetched DNP_WAMP
Fetched DNP_DAPPMANAGER
Fetched DNP_BIND
Fetched DNP_ADMIN
Fetched DNP_IPFS
Fetched DNP_VPN
Fetched DNP_WIFI

  Uploaded core manifest successfully!

  https://ipfs.io/ipfs/QmS2ZBZ8G43jyTx8tQPJW1xDZUieLBKzBPTiCS3ExvyXrx

  /ipfs/QmS2ZBZ8G43jyTx8tQPJW1xDZUieLBKzBPTiCS3ExvyXrx

```
