require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();


// go to https://hardhat.org/config/ to learn more on how to deploy to various networks


/** @type import('hardhat/config').HardhatUserConfig */

// If you want to connect to another network, you'll need to do it here. Probably put the RPC there.


module.exports = {
  solidity: "0.8.9",
  networks:{
    localhost:{}
  }
};
