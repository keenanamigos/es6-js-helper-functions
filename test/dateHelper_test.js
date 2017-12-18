/* global describe it */
import { expect } from "chai";
import { DateHelper } from "../src/dateHelper";

describe("DateHelper", () => {
	describe("getFormattedCurrentDate", () => {
		it("should return the current date as a string formatted as mm/dd//yyyy", () => { 
			const currentDate = new Date();
			
			// January is 0 by default so 1 is added for formattting
			const month = currentDate.getMonth() + 1;
			const day = currentDate.getDate();
			const year = currentDate.getFullYear();

			const formattedDate = DateHelper.formatDate(month, day, year);

			expect(formattedDate).to.equal(DateHelper.getFormattedCurrentDate());
		});
	});

	describe("formatDate", () => {
		it("should return a properly formatted date", () => {
			const month = 8;
			const day = 6;
			const year = 2018;
			
			let someDate = DateHelper.formatDate(month, day, year);
			expect(someDate).to.equal("08/06/2018");
		});
	});
});
