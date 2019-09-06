import web3 from './web3';
 
const address = '0xea6752B7F7B5Febd908AFc62fAC3F69CE7D71AfE';
 
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_val",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
 
export default new web3.eth.Contract(abi, address);