var expect = require('chai').expect;

describe("getRandomInteger", () => {
    const NumberHelper = require("../dist/numberHelper").NumberHelper;

    it("should return a random integer between 0 and a given value", () => {
        const maxValue = 50;

        expect(NumberHelper.getRandomInteger(maxValue)).to.be.within(0, maxValue);
    });
});