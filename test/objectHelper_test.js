var expect = require('chai').expect;

describe('isObjectNullOrEmpty', () => {
    const ObjectHelper = require('../dist/objectHelper').ObjectHelper;

    it('should return true if an empty object is passed in', () => {
        let someObject = {};

        expect(ObjectHelper.isObjectNullOrEmpty(someObject)).to.be.true;
    });

    it('should return false if an object with properties is passed in', () => {
        let someObject = {
            name: "some name",
            age: 26
        };

        expect(ObjectHelper.isObjectNullOrEmpty(someObject)).to.be.false;
    });

    it('should return true if null is passed in', () => {
        let someValue = null;

        expect(ObjectHelper.isObjectNullOrEmpty(someValue)).to.be.true;
    });

    it('shoud throw a TypeError if the given parameter is not an object', () => {
        let someArray = [1, 2, 3];

         expect(ObjectHelper.isObjectNullOrEmpty.bind(ObjectHelper.isObjectNullOrEmpty, someArray)).to.throw(TypeError, someArray + " is not an Object.");
    });
});