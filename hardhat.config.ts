import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import { chainConfig } from "@nomiclabs/hardhat-etherscan/dist/src/ChainConfig";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: "0.8.13",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    pulsechainTestV2b: {
      chainId: 941,
      url: "https://rpc.v2b.testnet.pulsechain.com",
      accounts: process.env.PKEYS !== undefined ? [process.env.PKEYS] : [],
      gasPrice: 50000000000,
    },
  },
  etherscan: {
    // nedded for contract verification
    apiKey: "0",
  },
};

export default config;
