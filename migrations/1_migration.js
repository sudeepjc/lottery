const Lottery = artifacts.require("Lottery");
const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
const VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
const KEY_HASH =
  "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4";
const FEE = web3.utils.toWei("0.0001","ether");

module.exports = function (deployer) {
  deployer.deploy(Lottery,VRF_COORDINATOR,LINK_TOKEN,KEY_HASH,FEE);
};