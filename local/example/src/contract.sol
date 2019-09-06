pragma solidity ^0.5.0;
contract Hello {
    string private message;
    
    constructor(string memory mes) public {
        message = mes;
    }
    
    function setMessage(string memory mes) public {
        message = mes;
    }
 
    function getMessage() public view returns(string memory) {
        return message;
    }
}