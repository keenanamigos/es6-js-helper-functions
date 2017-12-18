/**
 * @class HTMLCollectionHelper
 * Class provides static methods to perform checks and operations on HTMLCollections
 */

export class HTMLCollectionHelper {
	// Class Methods

	/**
	 * @function
     * Converts a given HTMLCollection to an Array.
     * @param {HTMLCollection} htmlCollection - Collection to be converted.
     * @returns {array} - Return an array.
     */
	static convertCollectionToArray(htmlCollection) {
		const array = [...htmlCollection];

		return array;
	}
}