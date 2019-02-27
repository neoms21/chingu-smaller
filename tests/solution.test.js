var nextSmaller = require('../solution');

var assert = require('assert');
describe('Find Smaller tests', () => {
  // it('should return -1', () => {
  //   var result = nextSmaller(100);
  //   assert.equal(result, -1);
  // });

  it('returns next small number', () => {
    // assert.equal(nextSmaller(1), -1);
    // assert.equal(nextSmaller(123456789), -1);
    // assert.equal(nextSmaller(21), 12);
    assert.equal(nextSmaller(7348), 4873);
    // assert.equal(nextSmaller(907), 790);
    // assert.equal(nextSmaller(531), 513);
    // assert.equal(nextSmaller(135), -1);
    // assert.equal(nextSmaller(2071), 2017);
    // assert.equal(nextSmaller(1027), -1);
    // assert.equal(nextSmaller(414), 144);
    assert.equal(nextSmaller(228653356368), 228653353866);
  });
});

//7546
