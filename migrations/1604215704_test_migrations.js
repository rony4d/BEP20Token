
//  1. Ensure you have done truffle compile to ensure the contract ABI has been added to the artifact
const TestContract = artifacts.require("Test");

module.exports = function (deployer) {
  
  console.log("********************** Running BSC Test Migrations *****************************");

  
  deployer.then(async () => {


    await deployer.deploy(TestContract);

    console.log("Test Contract address: "+ TestContract.address );

 })

};