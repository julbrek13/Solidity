const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  const Simplestorage = await hre.ethers.getContractFactory("Simplestorage");
  const simplestorage = await Simplestorage.deploy({});
  await simplestorage.deployed();
  console.log("el numero es:", simplestorage.number);
  console.log("Simplestorage deployed to:", simplestorage.address);
  console.log("se deployo con la cuenta de:", deployer.address);
  console.log("el balance de la cuenta es de:", accountBalance.toString());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
