
//  Web3 doc: https://web3js.readthedocs.io/en/v1.2.11/web3-eth-accounts.html#create

const Web3 = require('web3');

const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");

var account = web3.eth.accounts.create([Date.now().toString()]);

console.log(account);