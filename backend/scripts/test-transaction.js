const ethers = require("ethers");
const artifact = require("../artifacts/contracts/SpinToken.sol/SpinCoin.json");
const hre = require("hardhat");
require("dotenv").config();

const TOKEN_DEPLOYEMENT_ADDRESS = process.env.CONTRACT_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const provider = new ethers.providers.AlchemyProvider(
  "ropsten",
  process.env.API_KEY
);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(
  TOKEN_DEPLOYEMENT_ADDRESS,
  artifact.abi,
  signer
);

async function main() {
  const to = "0x6B270d8cd3696Ccac63f762d8E25959235a5D069";
  const amount = 5;
  const contract_signer = contract.connect(signer);
  const sent = await contract_signer.transfer(to, amount);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
