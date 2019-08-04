var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
var web3 = new Web3('https://ropsten.infura.io/922a32f36e0e43d0af08e33e01e718c0')

const account1 = '0xC17B31059c72E68BB99018dc7Be844C5199732C9'
const account2 = '0x2421477f9AC767160712e0435E5f9DDA6168008d'

const privateKey1 = Buffer.from('50570e1ccbc84c4dde938c7dc75c37ba111e3bd838fa05dcf2d9094626df13d8','hex')
const privateKey2 = Buffer.from('55d17e7c12a0742789dafc5f8001df031c228a2f089c3e0faa516cc5fae62a5f','hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2, // destination account
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    
    // Sign the transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1) // sender 

    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log(txHash)
    })
})

