require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const projectId = process.env.PROJECT_ID;

const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      // Infura
      url: "https://polygon-mumbai.g.alchemy.com/v2/qcR8xIgSVVlUssw-d_aCblYqOdqvV66L",
      // url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [privateKey],
    },
    matic: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
