/* global describe it */
import { expect } from "chai";
import { NullHelper } from "../src/nullHelper";

describe("NullHelper", () => {
	describe("convertNullToZero", () => {
		it("should convert a null input to the integer 0", () => {
			let someInput = null;
	
			expect(NullHelper.convertNullToZero(someInput)).to.equal(0);
		});
	
		it("should return the given input if it is not equal to null", () => {
			let someInput = "this is a string";
	
			expect(NullHelper.convertNullToZero(someInput)).to.equal("this is a string");
		});
	});
});
