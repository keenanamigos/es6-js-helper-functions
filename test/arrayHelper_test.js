var expect = require('chai').expect;

describe('isArrayNullOrEmpty', () => {
    const ArrayHelper = require('../dist/arrayHelper').ArrayHelper;

    it('should return true when an empty array is passed in', () => {
        let someEmptyArray = [];

        expect(ArrayHelper.isArrayNullOrEmpty(someEmptyArray)).to.be.true;
    });

    it('should return false when an array with values is passed in', () => {
        let someFullArray = [1, 2, 3];

        expect(ArrayHelper.isArrayNullOrEmpty(someFullArray)).to.be.false;
    });

    it('should return true when null is passed in', () => {
        let someNullValue = null;

        expect(ArrayHelper.isArrayNullOrEmpty(someNullValue)).to.be.true;
    });

    it('should return true when a non-array is passed in', () => {
        let someNumber = 6;

        expect(ArrayHelper.isArrayNullOrEmpty(someNumber)).to.be.true;
    });
});