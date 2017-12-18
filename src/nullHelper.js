/**
 * @class NullHelper
 * Class to peform checks and operations on null values.
 */

export class NullHelper {
	// Class Methods

	/**
	 * @function
     * Convert a null value to the integer 0 or return the given value. 
     * @param {any} input - Given value to be checked and converted if null.
     * @returns {any} - Return the integer 0 if null or the given input otherwise
     */
	static convertNullToZero(input) {
		if (input === null) {
			return 0;
		} else {
			return input;
		}
	}
}