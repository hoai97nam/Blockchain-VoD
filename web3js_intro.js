const Web3 = require ('web3');
const rpcURL = "https://mainnet.infura.io/v3/922a32f36e0e43d0af08e33e01e718c0";
const web3  = new Web3(rpcURL);
const account = "0x2421477f9AC767160712e0435E5f9DDA6168008d";
web3.eth.getBalance(account, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
  });
console.log(balance);
