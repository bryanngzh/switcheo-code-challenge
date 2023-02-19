const { ethers } = require("ethers");

const ADDR = "0x5FbDB2315678afecb367f032d93F642f64180aa3";   // your contract address
const myTokenArtifact = require("./artifacts/contracts/Lock.sol/Lock.json");
const ABI = myTokenArtifact.abi

const ADDRESS = "0x1234567890123456789012345678901234567890"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH
    "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", // UNI
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);