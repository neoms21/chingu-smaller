var nextSmaller = require('../alternate');

var assert = require('assert');
describe('Find Smaller tests', () => {
  // it('should return -1', () => {
  //   var result = nextSmaller(100);
  //   assert.equal(result, -1);
  // });

  it('returns next small number', () => {
    // assert.equal(nextSmaller(1), -1);
    // assert.equal(nextSmaller(31039956537), 31039956375);
    // assert.equal(nextSmaller(6406), 6064);
    // assert.equal(nextSmaller(88040544976406), 88040544976064);
    // assert.equal(nextSmaller(542424685912122), 542424685911222);
    // assert.equal(nextSmaller(8441212), 8441122);
    // assert.equal(nextSmaller(7402897438808), 7402897438088);
    // assert.equal(nextSmaller(123456789), -1);
    // assert.equal(nextSmaller(21), 12);
    // assert.equal(nextSmaller(7348), 4873);
    // assert.equal(nextSmaller(907), 790);
    // assert.equal(nextSmaller(531), 513);
    // assert.equal(nextSmaller(135), -1);
    // assert.equal(nextSmaller(2071), 2017);
    // assert.equal(nextSmaller(1027), -1);
    assert.equal(nextSmaller(414), 144);
    // assert.equal(nextSmaller(6368), 3866);
    // assert.equal(nextSmaller(228653356368), 228653353866);
    // assert.equal(nextSmaller(555555567), -1);
    // assert.equal(nextSmaller(215), 152);
    // assert.equal(nextSmaller(5215), 5152);
    // assert.equal(nextSmaller(1938645925215), 1938645925152);
  });
});

//7546
