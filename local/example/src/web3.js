import Web3 from 'web3';
 
// const web3 = new Web3(window.web3.currentProvider);
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// const provider = new Web3.providers.HttpProvider("http://localhost:8545");
// const web3 = new Web3(provider);
export default web3;