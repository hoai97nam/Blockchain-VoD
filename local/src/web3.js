import Web3 from 'web3';
// import Fortmatic from 'fortmatic';

// const fm = new Fortmatic('pk_test_D1BED5F6CF9F5A5B');
// window.web3 = new Web3(fm.getProvider());

// const web3 = new Web3('https://ropsten.infura.io/922a32f36e0e43d0af08e33e01e718c0');
// const web3 = new Web3(window.web3.currentProvider);
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/922a32f36e0e43d0af08e33e01e718c0'));
 
export default web3;