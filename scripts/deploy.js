const { ethers } = require("hardhat");
const {CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS} = require("../constants");

async function main() {
  const cryptoDevTokenContractAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  const exchangeContract = await ethers.getContractFactory("Exchange");
  const deployedexchangeContract = await exchangeContract.deploy(cryptoDevTokenContractAddress);
  await deployedexchangeContract.deployed();

  console.log(`Exchange Contract Deployed at Address: ${deployedexchangeContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })