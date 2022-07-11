require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
//const provider = new ethers.providers.JsonRpcProvider(url);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


//import('hardhat/config').HardhatUserConfig

module.exports = {
solidity: '0.8.4',
networks: {
  hardhat: {
    chainId: 1337
  },
  //mumbai: {
  //  url: "https://rpc-mumbai.matic.today",
  //accounts: [process.env.pk]
  //},
  rinkeby: {
    url: process.env.DEPLOY_KEY_RINKEBY,
    accounts: [process.env.DEPLOY_ACC_RINKEBY],
   }
},
};
