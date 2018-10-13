const Property = artifacts.require("./Property.sol");
const PropertyToken = artifacts.require("./PropertyToken.sol");
const PropertyRegistry = artifacts.require("./PropertyRegistry.sol");

contract('Property Registry Contract Tests', function(account) {
  
  let property, propertyToken, propertyRegistry;
  const price = 100;
  const alice = account[0];
  const dale = account[1];
  
  it('should deploy the Property contract', async () => {
    property = await Property.deployed();
    assert(property !== undefined, 'Property was not deployed');
  });

  it('should deploy the PropertyRegistration contract', async () => {
    propertyRegistry = await PropertyRegistry.deployed();
    assert(propertyRegistry !== undefined, "PropertyRegistry was not deployed");
  })
  
  // it('should deploy the PropertyToken contract', async () => {
  //   propertyToken = await PropertyToken.deployed();
  //   assert(propertyToken !== undefined, 'PropertyToken was not deployed');
  // });
  
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
  
  it('should not allow dale to register the property as a non-owner', async () => {
    try {
      await propertyRegistry.registerProperty(1, price, { from: dale });
      await propertyRegistry.stayData.call(1);
      assert(false, 'Fail: Dale registered the property');
    } catch(e) {
      assert(true, 'Fail: Dale registered the property');
    }
  });

});