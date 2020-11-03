    /**
     *  @todo    
     *  Ensure to install web3 before running this test -> npm install web3
     *  Tests to write:
     *  1.  Get the Balance of the Xend Token Contract Creator on Binance Smart Chain Testnet
     */

    console.log("********************** Binance Smart Chain Test *****************************");
    const Web3 = require('web3');
    const { assert } = require('console');
    const web3 = new Web3("HTTP://127.0.0.1:8545");
    
    const TestContract = artifacts.require('Test');


    const { Contract } = require('web3-eth-contract');
    

    const unlockedAddress = "0x3B022b8c20C8F0AF80970Be744BdcCEE50fC3F95";   // Xend Token Contract Creator:  Has lots of Xend tokens on BSC Testnet
    


    contract('Test',() =>{

        let testContract = null;


        before(async () =>{

            testContract = await TestContract.deployed();

        });


        it('Test Contract: Should Get the Balance of the Xend Token Contract Creator on Binance Smart Chain Testnet',async () => {

            var result = await testContract.GetBalanceOfAddress(unlockedAddress);

            console.log(BigInt(result).toString());

            //  The balance must be greater than 10,000 $Xend Tokens
            assert(BigInt(result) >= BigInt("10000000000000000000000"));

        });

   
    });