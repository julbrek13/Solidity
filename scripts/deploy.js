const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
<<<<<<< HEAD
  const Simplestorage = await hre.ethers.getContractFactory("Simplestorage");
  const simplestorage = await Simplestorage.deploy({});
  await simplestorage.deployed();
  console.log("el numero es:", simplestorage.number);
=======

  console.log("Deploying contract with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());
  //lee el archivo de contrato
  const Simplestorage = await hre.ethers.getContractFactory("Simplestorage");
  //activa el despliegue
  const simplestorage = await Simplestorage.deploy({});
  //espera a que finalice el despliegue
  await simplestorage.deployed();
  console.log("el numero de contrato es:", simplestorage.number);
>>>>>>> 1010de114457c571d02157dba62bec9a14ee952c
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
