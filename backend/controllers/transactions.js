const ethers = require("ethers");
const { get } = require("http");
const artifact = require("../artifacts/contracts/SpinToken.sol/SpinCoin.json");
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

// post request of making a transaction.
const makeTransaction = async (req, res, next) => {
  const to = req.body.to;
  const amount = req.body.amount;
  const contract_signer = contract.connect(signer);
  const sent = await contract_signer.transfer(to, amount);
  res
    .status(200)
    .json({ message: `Sent ${amount} of SpinCoins from ${from} to ${to}` });
};

const getTransaction = async (req, res, next) => {
  console.log(req.body);
  const accounts = await provider.getNetwork();

  res.status(200).json({ message: "hello", accounts: accounts });
};

module.exports = {
  makeTransaction: makeTransaction,
  getTransaction: getTransaction,
};
