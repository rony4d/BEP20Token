// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./IBEP20.sol";

contract Test {
    address _owner;
    string _value;

    IBEP20 _xendToken = IBEP20(0x931027f8666765A3974C4a449Ad69437bAAc37E2); //  I already deployed the Xend Token Contract on BSC Testnet

      constructor() public {
        _owner = msg.sender;
      }
    
    
      function SetValue(string memory value) public{
        _value = value;
      }
    
      function GetValue() public view returns (string memory){
        return _value;
      }
    
      function GetOwner() public view returns (address){
        return _owner;
      }
    
      function GetBalanceOfAddress(address member) public view returns (uint256){
        return _xendToken.balanceOf(member);
      }
}