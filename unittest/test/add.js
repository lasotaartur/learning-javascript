const expect = require('chai').expect;
const add = require('../add.js');

describe('add', function() {
    it('should return the sum of two positive numbers', () =>
        expect(add(2, 4)).to.equal(6)
    );

    it('should return the sum of two negative numbers', () =>
        expect(add(-2, -4)).to.equal(-6)
    );
});
