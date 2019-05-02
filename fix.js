const ipfs = require("./ipfs");

fix();

async function fix() {
  const coreHash = process.argv[2];
  if (!coreHash || !coreHash.startsWith("Qm"))
    throw Error("requires an IPFS hash as first argument: 'Qm'");
  const coreManifest = await ipfs.catObj(coreHash);
  const dependencies = {};
  await Promise.all(
    Object.entries(coreManifest.dependencies).map(async ([dnp, hash]) => {
      const manifest = await ipfs.catObj(hash);
      if (
        manifest.image.environment &&
        typeof manifest.image.environment === "object"
      ) {
        manifest.image.environment = Object.entries(
          manifest.image.environment
        ).map(([key, val]) => [key, val].join("="));
        const newHash = await addObj(manifest);
        dependencies[dnp] = "/ipfs/" + newHash;
        console.log(`Fixed ${dnp}`);
        console.log(manifest.image.environment);
      }
    })
  );
  const newCoreHash = await add({
    ...coreManifest,
    dependencies: {
      ...coreManifest.dependencies,
      ...dependencies
    }
  });
  console.log("/ipfs/" + newCoreHash);
}
