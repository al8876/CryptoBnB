const Property = artifacts.require("./Property.sol");

contract('Property - Tests:', function(account) {
  
  let property;
  const alice = account[0];
  const dale = account[1];
  
  it('should be deployed, Property', async () => {
    property = await Property.deployed();
    assert(property !== undefined, 'Property was not deployed');
  });
  
  it('should have contract name "Property" and symbol "PTK"', async () => {
    const name = await property.name.call();
    const symbol = await property.symbol.call();
    assert(name === 'Property' && symbol === 'PTK', 'Name and Symbol are incorrect');
  });
  
  it('should allow alice to create property with tokenId 1', async () => {
    await property.createProperty();
    const tokenId = await property.tokenOfOwnerByIndex.call(alice, 0);
    assert(tokenId.toNumber() === 1, 'tokenId not 1');
  });
  
  it('should allow alice to set URI of the property she owns', async () => {
    const _uri = 'https://my.house.com';
    const tx = await property.setURI(1, _uri);
    const uri = await property.getURI.call(1);
    assert(uri === _uri, 'URI not set');
  });
  
  it('should NOT allow dale to set URI for the property', async () => {
    const _uri = 'https://www.test.com';
    try {
      const tx = await property.setURI(1, _uri, { from: dale });
      assert(false, 'URI set');
    } catch(e) {
      assert(true, 'URI set');
    }
    const uri = await property.getURI.call(1);
    assert(uri !== _uri, 'URI should not be set');
  });
  
});