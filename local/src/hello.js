import web3 from './web3';
 
const address = '0x2182A330a8722133FB043ef2361F22Dcc8d33290';
 
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "mes",
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
		"inputs": [
			{
				"name": "mes",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
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