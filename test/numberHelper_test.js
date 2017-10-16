var expect = require('chai').expect;

describe("getRandomInteger", () => {
    const NumberHelper = require("../dist/numberHelper").NumberHelper;

    it("should return a random integer between 0 and a given value", () => {
        const maxValue = 50;

        expect(NumberHelper.getRandomInteger(maxValue)).to.be.within(0, maxValue);
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