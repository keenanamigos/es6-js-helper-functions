var expect = require('chai').expect;
const BooleanHelper = require('../dist/booleanHelper').BooleanHelper;

describe('isBoolean', () => {
    it('should return true if the given parameter is a boolean', () => {
        let someBool = true;

        expect(BooleanHelper.isBoolean(someBool)).to.be.true;
    });

    it('should return false if the given parameter is not a boolean', () => {
        let someInt = 6;

        expect(BooleanHelper.isBoolean(someInt)).to.be.false;
    });
});

describe('convertBooleanToInt', () => {
    it('should convert "true" to the integer value 1', () => {
        let someBool = true;

        expect(BooleanHelper.convertBooleanToInt(someBool)).to.equal(1);
    });

    it('should convert "false" to the integer value 0', () => {
        let someBool = false;
        
        expect(BooleanHelper.convertBooleanToInt(someBool)).to.equal(0);
    });

    it('should return the given value if the value was not a boolean', () => {
        let someInt = 5;

        expect(BooleanHelper.convertBooleanToInt(someInt)).to.equal(5);
    });
});