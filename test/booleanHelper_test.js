/* global describe it */
import { expect } from "chai";
import { BooleanHelper } from "../src/booleanHelper";

describe("isBoolean", () => {
	it("should return true if the given parameter is a boolean", () => {
		let someBool = true;

		expect(BooleanHelper.isBoolean(someBool)).to.be.true;
	});

	it("should return false if the given parameter is not a boolean", () => {
		let someInt = 6;

		expect(BooleanHelper.isBoolean(someInt)).to.be.false;
	});
});

describe("convertBooleanToInt", () => {
	it("should convert \"true\" to the integer value 1", () => {
		let someBool = true;

		expect(BooleanHelper.convertBooleanToInt(someBool)).to.equal(1);
	});

	it("should convert \"false\" to the integer value 0", () => {
		let someBool = false;
        
		expect(BooleanHelper.convertBooleanToInt(someBool)).to.equal(0);
	});

	it("should throw a TypeError is the given parameter is not a boolean", () => {
		let someInt = 5;

		expect(BooleanHelper.convertBooleanToInt.bind(BooleanHelper.convertBooleanToInt, someInt)).to.throw(TypeError, someInt + " is not a Boolean.");
	});
});