var expect = require('chai').expect;

describe("getRandomInteger", () => {
    const NumberHelper = require("../dist/numberHelper").NumberHelper;

    it("should return a random integer between 0 and a given value", () => {
        const maxValue = 50;

        expect(NumberHelper.getRandomInteger(maxValue)).to.be.within(0, maxValue);
    });

    it("should throw an error if the integer 0 is given", () => {
        const maxValue = 0;

        expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, maxValue)).to.throw(Error, maxValue + " is not a valid input. Please enter a Number greater than zero.");
    });

    it("should throw an error if a negative number is given", () => {
        const maxValue = 0;
        
        expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, maxValue)).to.throw(Error, maxValue + " is not a valid input. Please enter a Number greater than zero.");
    });

    it("should throw an error if a non-number is given", () => {
        const maxValue = 0;
        
        expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, maxValue)).to.throw(Error, maxValue + " is not a valid input. Please enter a Number greater than zero.");
    });
});

describe("isGreaterThanZero", () => {
    const NumberHelper = require("../dist/numberHelper").NumberHelper;

    it("should return true if a given number is greater than 0", () => {
        const someValue = 95;

        expect(NumberHelper.isGreaterThanZero(someValue)).to.be.true;
    });

    it("should return false if a given number is less 0", () => {
        const someValue = -95;

        expect(NumberHelper.isGreaterThanZero(someValue)).to.be.false;
    });

    it("should return true if a given number is equal to 0", () => {
        const someValue = 0;

        expect(NumberHelper.isGreaterThanZero(someValue)).to.be.false;
    });
});