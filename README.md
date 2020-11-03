# BEP-20 Token Implementation, Deployment and Test

This repo shows how to fork the Binance Smart Chain Testnet on Ganche, Deploy a contract and test the contract using truffle. 

## What we will achieve
 
1. forking the Binance Smart Chain Testnet with Ganache, hence creating a mini copy of the blockchain on our local machine
2. deploying and testing a Test contract that will interact with our token deployed on the Binance Smart Chain Testnet in Step 2

## STEP 1 
Forking The Binance Smart Chain Testnet With Ganace-CLI

NOTE: Ensure you have installed Ganace-CLI

We can easily use Ganache-cli to fork the Binance Smart Chain with the command below
ganache-cli --fork https://data-seed-prebsc-1-s1.binance.org:8545/

This gives you access to the Binance Smart Chain Testnet on our local machine running on 127.0.0.1 Port 8545


NOTE: Sometimes, the RPC endpoint might be down, so you can select another endpoint from this link https://docs.binance.org/smart-chain/developer/rpc.html. 
Under  BSC RPC Endpoints you will see a list of them. Also note that all these Endpoints still point to the same Binance Smart Chain

The advantage of Using Ganache CLI is that you can fork the mainnet or testnet of Binance Smart Chain and then communicate with existing contracts on the chain from your local machine. 
It is awesome. 

## STEP 2
To deploy and test the "Test Contract":
- Clone the repo
- Start Ganache as described in the STEP 1 above
- Navigate to project root directory
- Run $ truffle compile  command to ensure the contracts compile 
- Run $ truffle test command to deploy contracts and run tests automatically

Feel free to reuse code in your projects.

***Contributed with love by Ugo***
