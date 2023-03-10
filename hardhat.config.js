require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: process.env.TEST_RPC_URL,
      accounts: [process.env.TEST_PRIVATE_KEY]
    }
  }
};
