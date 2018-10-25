pragma solidity ^0.4.24;

// Open zeppelin templates - ERC721 Basic
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol";

// Open zeppelin templates - ERC20 Token
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract PropertyRegistry {

    ERC721Basic property;
    ERC20 propertyToken;
    struct Data {
        uint256 price;
        uint256 stays;
        uint256 checkIn;
        uint256 checkOut;
        address approved;
        address occupant;
        address requested;
    }

    mapping(uint256 => Data) public stayData;

    event CheckIn(uint256 indexed _tokenId);
    event CheckOut(uint256 indexed _tokenId);
    event Approved(uint256 indexed _tokenId);
    event Registered(uint256 indexed _tokenId);
    event Requested(uint256 indexed _tokenId);

    constructor(address _property, address _propertyToken) public {
        property = ERC721Basic(_property);
        propertyToken = ERC20(_propertyToken);
    }  

    modifier onlyOwner(uint256 _tokenId) {
        require(property.ownerOf(_tokenId) == msg.sender, "Error");
        _;
    }

    // --- FUNCTIONS ---

    // Function to register a property
    function registerProperty(uint256 _tokenId, uint256 _price) external onlyOwner(_tokenId) {
        stayData[_tokenId] = Data(_price, 0, 0, 0, address(0), address(0), address(0));
        emit Registered(_tokenId);
    }

    // Function to request dates for check in and checkout
    function request(uint256 _tokenId, uint256 _checkIn, uint256 _checkOut) external {
        require(stayData[_tokenId].requested == address(0)); //no one requested
        stayData[_tokenId].requested = msg.sender;
        stayData[_tokenId].checkIn = _checkIn;
        stayData[_tokenId].checkOut = _checkOut;
        emit Requested(_tokenId);
    }

    // Function to approve requests
    function approveRequest(uint256 _tokenId) external onlyOwner(_tokenId) {
        stayData[_tokenId].approved = stayData[_tokenId].requested;
        emit Approved(_tokenId);
    }


    // Function to check in to property
    function checkIn(uint256 _tokenId) external {
        require(stayData[_tokenId].approved == msg.sender, "The person trying to check in is not approved");
        require(now > stayData[_tokenId].checkIn, "Wrong time to check in");
        stayData[_tokenId].occupant = stayData[_tokenId].approved;
        emit CheckIn(_tokenId);
    }

    // Function to checkout of property
    function checkOut(uint256 _tokenId) external {
        require(stayData[_tokenId].occupant == msg.sender, "The occupant does not match the sender");
        require((now) < stayData[_tokenId].checkOut, "Cannot checkout yet");
        require(propertyToken.transfer(property.ownerOf(_tokenId), stayData[_tokenId].price));
        stayData[_tokenId].stays++;
        stayData[_tokenId].requested = address(0);
        emit CheckOut(_tokenId);
    }

}