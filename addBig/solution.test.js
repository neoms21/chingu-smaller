var add = require('./solution');

var assert = require('assert');

describe('add big numbers tests', () => {
  it('should return integer', () => {
    assert.equal(add('888', '222'), '1110');
    assert.equal(add('3', '69'), '72');
    assert.equal(add('0', '1'), '1');
    assert.equal(add('63829983432984289347293874', '90938498237058927340892374089'), '91002328220491911630239667963');
    //  90938498237058927340892374089
    //                     0239667963 });
  });
});
//7546
