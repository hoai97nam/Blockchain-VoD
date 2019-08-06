const Web3 = require ('web3');
const rpcURL = "https://mainnet.infura.io/922a32f36e0e43d0af08e33e01e718c0";
const web3  = new Web3(rpcURL);
const account = "0x00C5E04176d95A286fccE0E68c683Ca0bfec8454";
web3.eth.getBalance(account, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
  });
var result = web3.eth.getBalance('0xAA5c4244F05c92781C4F259913319d8ba1aCF05E');
var res = web3.utils.fromWei(result,'ether');
console.log(result.toNumber());