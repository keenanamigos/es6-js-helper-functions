/**
 * @class DateHelper
 * Class to perform operations on Date values 
 */

export class DateHelper {
	// Class Methods
    
	/**
	 * @function
     * Get the current date formatted as 08/08/2017.
     * @param {none}
     * @return {string} - Return a formatted date as a string in the form of month, day, year.
     */
	static getFormattedCurrentDate() {
		let currentDate = new Date();

		// January is 0 by default so 1 is added for formattting
		const month = currentDate.getMonth() + 1;
		const day = currentDate.getDate();
		const year = currentDate.getFullYear();

		currentDate = DateHelper.formatDate(month, day, year);

		return currentDate;
	}

	/**
	 * @function
     * Format a date as mm/dd/yyyy.
     * @param {number} month - A given month.
     * @param {number} day - A given day.
     * @param {number} year - A given year.
     * @returns {string} - Return the formatted date as a string.
     */
	static formatDate(month, day, year) {
		if (month < 10) {
			month = `0${month}`;
		}

		if (day < 10) {
			day = `0${day}`;
		}

		// Example of post-formatted date: 08/08/2017
		return `${month}/${day}/${year}`;
	}
}