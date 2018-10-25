const Property = artifacts.require("./Property.sol");
const PropertyToken = artifacts.require("./PropertyToken.sol");
const PropertyRegistry = artifacts.require("./PropertyRegistry.sol");

contract('Property Registry - Tests', function(account) {
  
  let property, propertyToken, propertyRegistry;
  const price = 100;
  const alice = account[0];
  const bob = account[1];
  const eve = account[2];
  
  it('should deploy the Property contract', async () => {
    property = await Property.deployed();
    assert(property !== undefined, 'Property was not deployed');
  });

  it('should deploy the PropertyRegistration contract', async () => {
    propertyRegistry = await PropertyRegistry.deployed();
    assert(propertyRegistry !== undefined, "PropertyRegistry was not deployed");
  })
  
  it('should deploy the PropertyToken contract', async () => {
    propertyToken = await PropertyToken.deployed();
    assert(propertyToken !== undefined, 'PropertyToken was not deployed');
  });
  
  // PROPERTY REGISTRATION TEST

  it('should allow alice to create property with tokenId 1', async () => {
    await property.createProperty();
    const tokenId = await property.tokenOfOwnerByIndex.call(alice, 0);
    assert(tokenId.toNumber() === 1, 'tokenId not 1');
  });

  it('should allow alice, as the owner of the property to register', async () => {
    await propertyRegistry.registerProperty(1, price, { from: alice });
    await propertyRegistry.stayData.call(1);
    assert(true, "Alice could not register the property");

  });
  
  it('should not allow bob to register the property as a non-owner', async () => {
    try {
      await propertyRegistry.registerProperty(1, price, { from: bob });
      await propertyRegistry.stayData.call(1);
      assert(false, 'Fail: bob registered the property');
    } catch(e) {
      assert(true, 'Fail: bob registered the property');
    }
  });

  it('should allow bob to submit a request', async () => {
    let checkInDate = parseInt((new Date().getTime()/1000) - 100);
    let checkOutDate = checkInDate + 1000;
    await propertyRegistry.request(1, checkInDate, checkOutDate, { from: bob });
    const requestData = await propertyRegistry.stayData.call(1);
    assert(requestData[6] == bob, "Was unable to request a stay at the property");
  });

  it('should not allow the request to go through: Check in is after checkout', async () => {
    let checkInDate = parseInt((new Date().getTime()/1000));
    let checkOutDate = checkInDate - 1000;
    try {
      await propertyRegistry.request(1, checkInDate, checkOutDate, { from: bob });
      await propertyRegistry.stayData.call(1);
      assert(false, "Was unable to request a stay at the property");
    } catch(e) {
      assert(true, 'Fail: bob registered the property');
    }
  });

  it('should not allow Eve to submit a request', async () => {
    let checkInDate = parseInt((new Date().getTime()/1000)) + 3600;
    let checkOutDate = checkInDate + 1000;
    try {
      await propertyRegistry.request(1, checkInDate, checkOutDate, { from: eve });
      await propertyRegistry.stayData.call(1);
      assert(false, "Was unable to request a stay at the property");
    } catch(e) {
      assert(true, 'Fail: Eve registered the property');
    }

  });

  it('should allow alice to approve bob\'s request', async () => {
      await propertyRegistry.approveRequest(1, { from: alice });
      const requestData = await propertyRegistry.stayData.call(1);
      assert(requestData[4] === bob, "Alice was unable to approve the request");
  });

  it('should allow bob to check in', async () => {
    await propertyRegistry.checkIn(1, { from: bob });
    const data = await propertyRegistry.stayData.call(1);
    assert(data[5] === bob, "bob was not able to check in");
  });
  
  it('should allow alice to mint Property Token for bob', async () => {
    let amount = 100;
    const tx = await propertyToken.mint(bob, amount, { from: alice });
    const balance = await propertyToken.balanceOf.call(bob);
    assert(balance.toNumber() === amount, 'balance');
  });

  it('should allow bob to checkout at property', async () => {
    await propertyRegistry.checkOut(1, { from: bob });
    const requestedData = await propertyRegistry.stayData.call(1);
    console.log(requestedData);
    assert(requestedData[2] !== bob, "Bob was not able to checkout");
  });
  
  
});