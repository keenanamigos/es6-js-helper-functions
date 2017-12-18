/**
 * @class ArrayHelper
 * Class provides static methods to perform checks and operations on arrays
 */

export class ArrayHelper {
	// Class Methods
    
	/**
	 * @function
     * Performs a check to see if a given array is null or empty.
     * @param {array} array - Array to be checked.
     * @returns {boolean} - Return true or false dependent on if the array is null or empty.
     */
	static isArrayNullOrEmpty(array) {
		if (array === null || typeof array === "undefined") {
			return true;
		}

		if (!Array.isArray(array)) {
			throw new TypeError(`${array} is not an Array.`);
		}

		if (array.length === 0 && Array.isArray(array)) {
			return true;
		}

		return false;
	}
}