const hre = require("hardhat");

async function main() {
  const Simplestorage = await hre.ethers.getContractFactory("Simplestorage");
  const simplestorage = await Simplestorage.deploy("...");
  console.log("el numero es:", simplestorage.number);
  await simplestorage.deployed();
  console.log("Simplestorage deployed to:", simplestorage.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
