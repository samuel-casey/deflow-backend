/*

Functionality for decoding erc20 value involved in a pending or confirmed transactions that involve 1 contract and 1 erc20 token. Can be used in conjunction with Blocknative SDK/API or another mempool monitor. Must have ABI of contract you're monitoring in order for it to work. 

*/

const ethers = require('ethers');
const cUSDT_ABI = require('./blocknative-sdk/src/cUSDT_ABI.json');

// ABI for Compound USDT market
const abi = cUSDT_ABI;

const provider = ethers.getDefaultProvider();
const inter = new ethers.utils.Interface(abi);

// ETHERS DECODE FUNCTION
const decodeTxnValue = async (txnHash) => {
	// get txn using ethers provider
	const tx = await provider.getTransaction(txnHash);

	console.log('transaction:', tx);

	// decode input of txn
	const decodedInput = inter.parseTransaction({
		data: tx.data,
		value: tx.value,
	});

	// Decoded Transaction
	return {
		functionName: decodedInput.name,
		sighash: decodedInput.sighash,
		from: tx.from,
		to: decodedInput.args[0],
		erc20Value: Number(decodedInput.args[0]),
	};
};

const callDecodeFunction = async (txnHash, tokenSymbol, tokenDecimals) => {
	const result = await decodeTxnValue(txnHash, abi);
	console.log('decoded transaction:', {
		function: result.functionName,
		token: tokenSymbol,
		value: result.erc20Value / 10 ** tokenDecimals,
	});
};

// example supply transaction
callDecodeFunction(
	'0x442d693bd5a1188c2b60d984feb42d3aedd2272cc11fb1e3aceed79e76f0bd9a',
	'USDT',
	6
);

// example borrow transaction
callDecodeFunction(
	'0x2922821ce0afe1ca0b076f93bdf76063858b60490e6533952c9e33950d1c73cf',
	'USDT',
	6
);
