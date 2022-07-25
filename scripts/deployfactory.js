const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  const Storagefactory = await hre.ethers.getContractFactory("StorageFactory");
  const storagefactory = await Storagefactory.deploy({});
  await storagefactory.deployed();
  console.log("el numero es:", storagefactory.number);
  console.log("Simplestorage deployed to:", storagefactory.address);
  console.log("se deployo con la cuenta de:", deployer.address);
  console.log("el balance de la cuenta es de:", accountBalance.toString());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
