const manifest = {
  name: "core.dnp.dappnode.eth",
  version: "0.1.21",
  description: "Dappnode package responsible for manage the core packages",
  avatar: "/ipfs/QmQWed5zepncXHvDHt5dZipjVcU7vyydxHmVJV5MF6Wwhr",
  type: "dncore",
  image: {
    path: "",
    hash: "",
    size: "",
    volumes: [
      "/usr/src/dappnode/DNCORE/:/usr/src/app/DNCORE/",
      "/var/run/docker.sock:/var/run/docker.sock"
    ],
    subnet: "172.33.0.0/16",
    ipv4_address: "172.33.1.11"
  },
  author: "Eduardo Antuña <eduadiez@gmail.com> (https://github.com/eduadiez)",
  keywords: ["DAppNodeCore"],
  homepage: {
    homepage: "https://github.com/dappnode/DNP_CORE#readme"
  },
  repository: {
    type: "git",
    url: "https://github.com/dappnode/DNP_CORE"
  },
  bugs: {
    url: "https://github.com/dappnode/DNP_CORE/issues"
  },
  license: "GPL-3.0",
  dependencies: {
    "bind.dnp.dappnode.eth": "0.1.6",
    "ipfs.dnp.dappnode.eth": "0.1.5",
    "ethchain.dnp.dappnode.eth": "0.1.15",
    "ethforward.dnp.dappnode.eth": "0.1.5",
    "vpn.dnp.dappnode.eth": "0.1.22",
    "wamp.dnp.dappnode.eth": "0.1.1",
    "admin.dnp.dappnode.eth": "0.1.18",
    "dappmanager.dnp.dappnode.eth": "0.1.22",
    "wifi.dnp.dappnode.eth": "0.1.0"
  }
};

module.exports = manifest;
