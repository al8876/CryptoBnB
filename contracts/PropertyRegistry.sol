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
        uint256 checkIn;
        uint256 checkOut;
        address occupant;
        address requester;
    }
    mapping(uint256 => Data) public stayData;

    constructor(address _property) public {
        property = ERC721Basic(_property);
    }    

    modifier onlyOwner(uint256 _tokenId) {
        require(property.ownerOf(_tokenId) == msg.sender, "Error");
        _;
    }

    // --- FUNCTIONS ---

    // Function to register a property
    function registerProperty(uint256 _tokenId, uint256 _price) external onlyOwner(_tokenId) {
        stayData[_tokenId] = Data(_price, 0, 0, 0, address(0), address(0));
    }

    // Function to request dates for check in and checkout
    function request(uint256 _tokenId, uint256 _checkIn, uint256 _checkOut) external {
        require(_checkIn > now, "Date is less than now");
        require(_checkOut > _checkIn, "Checkout date is before the check in date");
        require(stayData[_tokenId].requester == address(0), "Error Message");
        stayData[_tokenId].checkIn = _checkIn;
        stayData[_tokenId].checkOut = _checkOut;
        stayData[_tokenId].requester = msg.sender;
    }    

    // // Function to approve requests
    // function approveRequest(uint256 _tokenId) external onlyOwner(_tokenId) {
    //     require();
        
    // }

    // // Function to check in to property
    // function checkIn(uint256 _tokenId) external {

    // }

    // // Function to checkout of property
    // function checkOut(uint256 _tokenId) external {

    // }

}