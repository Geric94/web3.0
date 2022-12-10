//require(@nomiclabs/hardhat-waffle);
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/1okj3txKIKAonTJaCJHADEvdvicqH2so',
      accounts: ['3cea793dad9ffea65924a425daea38963ac57deec05b8d89710d5dd645b47272']
    }
  }
};
