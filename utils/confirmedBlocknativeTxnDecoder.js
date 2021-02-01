/*

Functionality for decoding a confirmed txn outputted by the Blocknative SDK/API. Decodes value of all ERC20 tokens involved in internal transactions.

*/

// for a transaction that involves the initiator buying a PoolTogether ticket, and PoolTogether depositing USDC in Compound
const exampleBlocknativeTransaction = {
	status: 'confirmed',
	monitorId: 'GETH_1_A_PROD',
	monitorVersion: '0.79.5',
	timePending: '5330',
	blocksPending: 1,
	pendingTimeStamp: '2021-01-30T16:17:37.585Z',
	pendingBlockNumber: 11758308,
	hash: '0x62c4e004c29ba8096491ead377fac3899ad6beec926686c882223ab3e3d43c48',
	from: '0x5359678a8d74cbA2043C9e2577346613980B66c6',
	to: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
	value: '0',
	gas: 558967,
	gasPrice: '149875000000',
	nonce: 5,
	blockHash:
		'0x4b1175a39dbdd1924635156c30dfc8be350457be11c6ca28b50df3da34826dbf',
	blockNumber: 11758309,
	transactionIndex: 387,
	input:
		'0xe323f8250000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00000000000000000000000000d81b1a8b1ad00baa2d6609e0bae28a38713872f70000000000000000000000000000000000000000000000000000000000000000',
	gasUsed: '434773',
	asset: 'ETH',
	blockTimeStamp: '2021-01-30T16:17:31.000Z',
	watchedAddress: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
	direction: '',
	counterparty: '',
	internalTransactions: [
		{
			type: 'DELEGATECALL',
			from: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			to: '0x3239b42f38b45cdcb2d9478fc7d64c9b60328f68',
			input:
				'0xe323f8250000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00000000000000000000000000d81b1a8b1ad00baa2d6609e0bae28a38713872f70000000000000000000000000000000000000000000000000000000000000000',
			gas: 527745,
			gasUsed: 527745,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0x391a437196c81eea7bbbbd5ed4df6b49de4f5c96',
			to: '0xc35efa2aba9d3fb6caa4c1a737710c2477cb2312',
			input: '0x18160ddd',
			gas: 505089,
			gasUsed: 505089,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xc35efa2aba9d3fb6caa4c1a737710c2477cb2312',
				methodName: 'totalSupply',
				params: {},
				contractAlias: ' ',
			},
		},
		{
			type: 'DELEGATECALL',
			from: '0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7',
			to: '0xade780a5815319645413d0cac3055bb5f01b3764',
			input: '0x18160ddd',
			gas: 500630,
			gasUsed: 500630,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xade780a5815319645413d0cac3055bb5f01b3764',
				methodName: 'totalSupply',
				params: {},
				contractAlias: ' ',
			},
		},
		{
			type: 'CALL',
			from: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			to: '0x3d9946190907ada8b70381b25c71eb9adf5f9b7b',
			input:
				'0x4d7f3db00000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00000000000000000000000000d81b1a8b1ad00baa2d6609e0bae28a38713872f70000000000000000000000000000000000000000000000000000000000000000',
			gas: 496300,
			gasUsed: 496300,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0x3d9946190907ada8b70381b25c71eb9adf5f9b7b',
			to: '0xa26b82d34c2f4b44163ad657f07d596aebde48c5',
			input:
				'0x4d7f3db00000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00000000000000000000000000d81b1a8b1ad00baa2d6609e0bae28a38713872f70000000000000000000000000000000000000000000000000000000000000000',
			gas: 487804,
			gasUsed: 487804,
			value: '0',
		},
		{
			type: 'CALL',
			from: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			to: '0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7',
			input:
				'0x5d7b07580000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 490074,
			gasUsed: 490074,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7',
			to: '0xade780a5815319645413d0cac3055bb5f01b3764',
			input:
				'0x5d7b07580000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 481687,
			gasUsed: 481687,
			value: '0',
		},
		{
			type: 'CALL',
			from: '0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7',
			to: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			input:
				'0x7cbab1c700000000000000000000000000000000000000000000000000000000000000000000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 470509,
			gasUsed: 470509,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			to: '0x3239b42f38b45cdcb2d9478fc7d64c9b60328f68',
			input:
				'0x7cbab1c700000000000000000000000000000000000000000000000000000000000000000000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 462421,
			gasUsed: 462421,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7',
			to: '0xade780a5815319645413d0cac3055bb5f01b3764',
			input:
				'0x70a082310000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6',
			gas: 444297,
			gasUsed: 444297,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xade780a5815319645413d0cac3055bb5f01b3764',
				methodName: 'balanceOf',
				params: {
					_owner: '0x5359678a8d74cbA2043C9e2577346613980B66c6',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'CALL',
			from: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			to: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			input:
				'0x23b872dd0000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf416000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 317665,
			gasUsed: 317665,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
				methodName: 'transferFrom',
				params: {
					_from: '0x5359678a8d74cbA2043C9e2577346613980B66c6',
					_to: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
					_value: '1000000000',
				},
				contractAlias: 'USDC',
				contractDecimals: 6,
				contractName: 'USD Coin',
				decimalValue: '1000',
			},
		},
		{
			type: 'DELEGATECALL',
			from: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			to: '0xb7277a6e95992041568d9391d09d0122023778a2',
			input:
				'0x23b872dd0000000000000000000000005359678a8d74cba2043c9e2577346613980b66c6000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf416000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 309994,
			gasUsed: 309994,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
				methodName: 'transferFrom',
				params: {
					_from: '0x5359678a8d74cbA2043C9e2577346613980B66c6',
					_to: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
					_value: '1000000000',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'CALL',
			from: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			to: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			input:
				'0x095ea7b300000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 268069,
			gasUsed: 268069,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
				methodName: 'approve',
				params: {
					_spender: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
					_value: '1000000000',
				},
				contractAlias: 'USDC',
				contractDecimals: 6,
				contractName: 'USD Coin',
				decimalValue: '1000',
			},
		},
		{
			type: 'DELEGATECALL',
			from: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			to: '0xb7277a6e95992041568d9391d09d0122023778a2',
			input:
				'0x095ea7b300000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 261179,
			gasUsed: 261179,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
				methodName: 'approve',
				params: {
					_spender: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
					_value: '1000000000',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'CALL',
			from: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			to: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
			input:
				'0xa0712d68000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 238242,
			gasUsed: 238242,
			value: '0',
			contractCall: {
				methodName: 'mint',
				params: {
					mintAmount: '1000000000',
				},
				contractAddress: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
				contractType: 'customAbi',
			},
		},
		{
			type: 'DELEGATECALL',
			from: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			to: '0xb7277a6e95992041568d9391d09d0122023778a2',
			input:
				'0x70a0823100000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563',
			gas: 218793,
			gasUsed: 218793,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
				methodName: 'balanceOf',
				params: {
					_owner: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'CALL',
			from: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
			to: '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
			input:
				'0x4ef4c3e100000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf416000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 177837,
			gasUsed: 177837,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
			to: '0xbe7616b06f71e363a310aa8ce8ad99654401ead7',
			input:
				'0x4ef4c3e100000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf416000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 173277,
			gasUsed: 173277,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			to: '0xb7277a6e95992041568d9391d09d0122023778a2',
			input:
				'0xdd62ed3e000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf41600000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563',
			gas: 133243,
			gasUsed: 133243,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
				methodName: 'allowance',
				params: {
					_owner: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
					_spender: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'DELEGATECALL',
			from: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			to: '0xb7277a6e95992041568d9391d09d0122023778a2',
			input:
				'0x70a08231000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			gas: 127632,
			gasUsed: 127632,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
				methodName: 'balanceOf',
				params: {
					_owner: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'DELEGATECALL',
			from: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			to: '0xb7277a6e95992041568d9391d09d0122023778a2',
			input:
				'0x70a0823100000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563',
			gas: 120393,
			gasUsed: 120393,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
				methodName: 'balanceOf',
				params: {
					_owner: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'CALL',
			from: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
			to: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			input:
				'0x23b872dd000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf41600000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 111446,
			gasUsed: 111446,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
				methodName: 'transferFrom',
				params: {
					_from: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
					_to: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
					_value: '1000000000',
				},
				contractAlias: 'USDC',
				contractDecimals: 6,
				contractName: 'USD Coin',
				decimalValue: '1000',
			},
		},
		{
			type: 'DELEGATECALL',
			from: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			to: '0xb7277a6e95992041568d9391d09d0122023778a2',
			input:
				'0x23b872dd000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf41600000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000000000000000000000000000000000003b9aca00',
			gas: 106997,
			gasUsed: 106997,
			value: '0',
			contractCall: {
				contractType: 'erc20',
				contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
				methodName: 'transferFrom',
				params: {
					_from: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
					_to: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
					_value: '1000000000',
				},
				contractAlias: ' ',
			},
		},
		{
			type: 'CALL',
			from: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
			to: '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
			input:
				'0x41c728b900000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf416000000000000000000000000000000000000000000000000000000003b9aca0000000000000000000000000000000000000000000000000000000439fbe07aad',
			gas: 75056,
			gasUsed: 75056,
			value: '0',
		},
		{
			type: 'DELEGATECALL',
			from: '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
			to: '0xbe7616b06f71e363a310aa8ce8ad99654401ead7',
			input:
				'0x41c728b900000000000000000000000039aa39c021dfbae8fac545936693ac917d5e7563000000000000000000000000de9ec95d7708b8319ccca4b8bc92c0a3b70bf416000000000000000000000000000000000000000000000000000000003b9aca0000000000000000000000000000000000000000000000000000000439fbe07aad',
			gas: 72096,
			gasUsed: 72096,
			value: '0',
		},
	],
	netBalanceChanges: [
		{
			address: '0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416',
			balanceChanges: [
				{
					delta: '1000000000',
					asset: {
						type: 'erc20',
						symbol: ' ',
						contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
					},
					breakdown: [
						{
							counterparty: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
							amount: '1000000000',
						},
					],
				},
			],
		},
		{
			address: '0xb7277a6e95992041568d9391d09d0122023778a2',
			balanceChanges: [
				{
					delta: '-2000000000',
					asset: {
						type: 'erc20',
						symbol: ' ',
						contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
					},
					breakdown: [
						{
							counterparty: '0xde9ec95d7708B8319CCca4b8BC92c0a3B70bf416',
							amount: '-1000000000',
						},
						{
							counterparty: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
							amount: '-1000000000',
						},
					],
				},
			],
		},
		{
			address: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
			balanceChanges: [
				{
					delta: '1000000000',
					asset: {
						type: 'erc20',
						symbol: ' ',
						contractAddress: '0xb7277a6e95992041568d9391d09d0122023778a2',
					},
					breakdown: [
						{
							counterparty: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
							amount: '1000000000',
						},
					],
				},
			],
		},
	],
	serverVersion: '0.88.0',
	eventCode: 'txConfirmed',
	timeStamp: '2021-01-30T16:17:42.835Z',
	system: 'ethereum',
	network: 'main',
};

// loop through net balance changes of transaction and find delta for watchedContracts
// return inflows, outflows, net flows for watchedContract
const decodeBlocknativeTransactionFlows = (transaction, watchedContracts) => {
	const values = {};

	// loop through all net balance changes of transaction -> find value if bal changes for watched addresses -> add them to the values object
	transaction.netBalanceChanges.forEach((contract) => {
		if (Object.keys(watchedContracts).includes(contract.address)) {
			const value = contract.balanceChanges[0].delta;
			const contractName = watchedContracts[contract.address][0];
			const contractTokenDecimals = watchedContracts[contract.address][1];
			values[contractName] = value / 10 ** contractTokenDecimals;
		}
	});
	return values;
};

console.log(
	decodeBlocknativeTransactionFlows(exampleBlocknativeTransaction, {
		'0x39aa39c021dfbae8fac545936693ac917d5e7563': ['cUSDC', 6],
		'0xb7277a6e95992041568d9391d09d0122023778a2': ['USDC', 6],
		'0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416': ['PcUSDC', 6],
	})
);
