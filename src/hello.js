import web3 from './web3';
 
const address = '0x190dc558f813229cbc34fd3e210ba34bf452642d';
 
const abi = [
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usrStorages",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_addUsr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_passwd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_daytime",
				"type": "string"
			}
		],
		"name": "confirm",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_addUsr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_passwd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_daytime",
				"type": "string"
			}
		],
		"name": "addUsr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
 
export default new web3.eth.Contract(abi, address);