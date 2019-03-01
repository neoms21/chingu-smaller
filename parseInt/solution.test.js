var parsed = require('./solution');

var assert = require('assert');
describe('parse to int tests', () => {
  it('should return integer', () => {
    assert.equal(parsed('Ten thousand three hundred and thirty five'), 10335);
    assert.equal(parsed('three thousand three hundred and thirty five'), 3335);
    assert.equal(parsed('three hundred and thirty five'), 335);
    assert.equal(parsed('twenty one'), 21);

    assert.equal(parsed('nine hundred thousand'),900000)
  });
});

//7546
