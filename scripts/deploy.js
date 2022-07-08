const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contract with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());
  //lee el archivo de contrato
  const Simplestorage = await hre.ethers.getContractFactory("Simplestorage");
  //activa el despliegue
  const simplestorage = await Simplestorage.deploy({});
  //espera a que finalice el despliegue
  await simplestorage.deployed();
  console.log("el numero de contrato es:", simplestorage.number);
  console.log("Simplestorage deployed to:", simplestorage.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
