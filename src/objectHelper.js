/**
 * @class ObjectHelper
 * Class to perform checks and operations on objects. 
 */

export class ObjectHelper {
	// Class Methods

	/**
	 * @function
     * Perform a check to see if a given object is null or empty.
     * @param {object} object - The object to be checked.
     * @returns {boolean} - Return a boolean dependent on whether the given object was null or empty. 
     */
	static isObjectNullOrEmpty(object) {
		if (object === null || typeof object === "undefined") {
			return true;
		}

		if (object.constructor !== Object) {
			throw new TypeError(`${object} is not an Object.`); 
		}

		if (Object.keys(object).length === 0 && object.constructor === Object) {
			return true;
		}

		return false;
	}
}