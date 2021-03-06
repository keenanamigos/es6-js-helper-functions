/* global describe it */
import { expect } from "chai";
import { ArrayHelper } from "../src/arrayHelper";

describe("ArrayHelper", () => {
	describe("isArrayNullOrEmpty", () => {
		it("should return true when an empty array is passed in", () => {
			let someEmptyArray = [];
	
			expect(ArrayHelper.isArrayNullOrEmpty(someEmptyArray)).to.be.true;
		});
	
		it("should return false when an array with values is passed in", () => {
			let someFullArray = [1, 2, 3];
	
			expect(ArrayHelper.isArrayNullOrEmpty(someFullArray)).to.be.false;
		});
	
		it("should return true when null is passed in", () => {
			let someNullValue = null;
	
			expect(ArrayHelper.isArrayNullOrEmpty(someNullValue)).to.be.true;
		});
	
		it("should throw a TypeError when a non-array is passed in", () => {
			let someNumber = 6;
	
			expect(ArrayHelper.isArrayNullOrEmpty.bind(ArrayHelper.isArrayNullOrEmpty, someNumber)).to.throw(TypeError, `${someNumber} is not an Array.`);
		});
	});
});