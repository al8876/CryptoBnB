pragma solidity ^0.4.24;

// Open zeppelin templates - ERC721 Basic
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol";

// Open zeppelin templates - ERC20 Token
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract PropertyRegistry {

    ERC721Basic property;
    struct Data {
        uint256 price;
        uint256 stays;
        address occupant;
    }
    mapping(uint256 => Data) public stayData;

    constructor(address _property) public {
        property = ERC721Basic(_property);
    }    

    modifier onlyOwner(uint256 _tokenId) {
        require(property.ownerOf(_tokenId) == msg.sender, "Error");
        _;
    }

    function registerProperty(uint256 _tokenId, uint256 _price) external onlyOwner(_tokenId) {
        stayData[_tokenId] = Data(_price, 0, address(0));
    }

}