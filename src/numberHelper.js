/**
 * @class NumberHelper
 * Class provides static methods to perform checks and operations on numbers
 */

export class NumberHelper {
	// Class Methods

	/**
     * Return a random integer between the given minimum and maximum values.
     * @param {number} minValue - Minimum value the returned integer can be.
     * @param {number} maxValue - Maximum value the returned integer can be.
     * @return {number} - Return an integer.
     */
	static getRandomInteger(minValue, maxValue) {
		if (NumberHelper.isZeroOrGreater(minValue) && NumberHelper.isGreaterThanZero(maxValue)) {
			// The maximum and minimum are both inclusive
			return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; 
		} else {
			throw new Error(`${minValue} AND/OR ${maxValue} are not valid input. Please enter Numbers greater than zero.`);
		}
	}

	/**
     * Determine if a given number is greater than zero.
     * @param {number} number - Number to be checked.
     * @return {boolean} - Return an boolean based on if the given value is greater than or less than zero.
     */
	static isGreaterThanZero(number) {
		if (!Number.isNaN(number) && number > 0) {
			return true;
		}

		return false;
	}

	/**
     * Determine if a given number is zero or greater.
     * @param {number} number - Number to be checked.
     * @return {boolean} - Return an boolean based on if the given value is zero or greater.
     */
	static isZeroOrGreater(number) {
		if (!Number.isNaN(number) && number >= 0) {
			return true;
		}

		return false;
	}
}