/* global describe it */
import { expect } from "chai";
import { NumberHelper } from "../src/numberHelper";

describe("NumberHelper", () => {
	describe("getRandomInteger", () => {
		it("should return a random integer between 0 and a given value", () => {
			const minValue = 0;
			const maxValue = 50;
	
			expect(NumberHelper.getRandomInteger(minValue, maxValue)).to.be.within(minValue, maxValue);
		});
	
		it("should throw an error if the integer 0 is given for the maxValue", () => {
			const minValue = 0;
			const maxValue = 0;
	
			expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, minValue, maxValue)).to.throw(Error, `${minValue} AND/OR ${maxValue} are not valid input. Please enter values greater than zero.`);
		});
	
		it("should throw an error if a negative number is given", () => {
			const minValue = 0;
			const maxValue = -6;
			
			expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, minValue, maxValue)).to.throw(Error, `${minValue} AND/OR ${maxValue} are not valid input. Please enter values greater than zero.`);
		});
	
		it("should throw an error if a non-number is given", () => {
			const minValue = 0;
			const maxValue = "B";
			
			expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, minValue, maxValue)).to.throw(Error, `${minValue} AND/OR ${maxValue} are not valid input. Please enter values greater than zero.`);
		});
	});
	
	describe("isGreaterThanZero", () => {	
		it("should return true if a given number is greater than 0", () => {
			const someValue = 95;
	
			expect(NumberHelper.isGreaterThanZero(someValue)).to.be.true;
		});
	
		it("should return false if a given number is less 0", () => {
			const someValue = -95;
	
			expect(NumberHelper.isGreaterThanZero(someValue)).to.be.false;
		});
	
		it("should return false if a given number is equal to 0", () => {
			const someValue = 0;
	
			expect(NumberHelper.isGreaterThanZero(someValue)).to.be.false;
		});
	});
	
	describe("isZeroOrGreater", () => {
		it("should return true if the given value is 0", () => {
			const someValue = 0;
	
			expect(NumberHelper.isZeroOrGreater(someValue)).to.be.true;
		});
	
		it("should return true if the given value is greater than 0", () => {
			const someValue = 15;
	
			expect(NumberHelper.isZeroOrGreater(someValue)).to.be.true;
		});
	
		it("should return false if the given value is less than 0", () => {
			const someValue = -5;
	
			expect(NumberHelper.isZeroOrGreater(someValue)).to.be.false;
		});
	});
});
