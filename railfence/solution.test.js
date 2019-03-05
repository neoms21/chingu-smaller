var encode = require('./railfence').encode;
var decode = require('./railfence').decode;

const assert = require('assert');
describe('rail fence tests', () => {
    describe('Encode tests', () => {
        assert.equal(encode('WEAREDISCOVEREDFLEEATONCE', 3), 'WECRLTEERDSOEEFEAOCAIVDEN');
        assert.equal(encode('Hello, World!', 3), 'Hoo!el,Wrdl l');
    });

    describe('Decode tests', () => {
        it.only('should encode', () => {
            assert.equal(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3), 'WEAREDISCOVEREDFLEEATONCE');
        });
    });
});
