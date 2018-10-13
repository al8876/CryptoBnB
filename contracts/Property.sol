pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

contract Property is ERC721Token {

    constructor(string _name, string _symbol) public ERC721Token(_name, _symbol) {

    }

    // MODIFIER - Check to see if transaction is from the owner
    modifier onlyOwner(uint256 _tokenId) {
        require(tokenOwner[_tokenId] == msg.sender, "Sender not authorized");
        _;
    }

    // Function to mint property tokens
    function createProperty() external {
        _mint(msg.sender, allTokens.length + 1);
    }

    // Function to SET URI of Token
    function setURI(uint256 _tokenId, string _uri) external onlyOwner(_tokenId) {
        _setTokenURI(_tokenId, _uri);
    }

    // Function to GET URI of Token
    function getURI(uint256 _tokenId) external view returns(string) {
        return tokenURIs[_tokenId];
    }

}