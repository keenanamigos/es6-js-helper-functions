/* global describe it */
import { expect } from "chai";
import { ObjectHelper } from "../src/objectHelper";

describe("ObjectHelper", () => {
	describe("isObjectNullOrEmpty", () => {
		it("should return true if an empty object is passed in", () => {
			const someObject = {};
	
			expect(ObjectHelper.isObjectNullOrEmpty(someObject)).to.be.true;
		});
	
		it("should return false if an object with properties is passed in", () => {
			const someObject = {
				name: "some name",
				age: 26
			};
	
			expect(ObjectHelper.isObjectNullOrEmpty(someObject)).to.be.false;
		});
	
		it("should return true if null is passed in", () => {
			const someValue = null;
	
			expect(ObjectHelper.isObjectNullOrEmpty(someValue)).to.be.true;
		});
	
		it("should throw a TypeError if the given parameter is not an object", () => {
			const someArray = [1, 2, 3];
	
			expect(ObjectHelper.isObjectNullOrEmpty.bind(ObjectHelper.isObjectNullOrEmpty, someArray)).to.throw(TypeError, `${someArray } is not an Object.`);
		});
	});
});