/**
 * @class BooleanHelper
 * Class provides static methods to perform checks and operations on boolean values
 */

export class BooleanHelper {
	// Class Methods
    
	/**
	 * @function
     * Performs a check to see if a given value is of type boolean.
     * @param {any} value - Value to be checked to determine if it is a boolean.
     * @returns {boolean} - Return true or false dependent on if the given value is of type boolean.
     */
	static isBoolean(value) {
		if (value.constructor !== Boolean) {
			return false;
		}

		return true;
	}

	/**
	 * @function
     * Convert a given boolean to a corresponding integer value
     * @param {boolean} value - Boolean to be converted.
     * @returns {number} - Return the proper integer value given a true or false parameter.
     */
	static convertBooleanToInt(value) {
		if (!BooleanHelper.isBoolean(value)) {
			throw new TypeError(`${value} is not a Boolean.`);
		} else {
			if (value === true) {
				return 1;
			} else {
				return 0;
			}
		}
	}
}