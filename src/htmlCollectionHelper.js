/**
 * @class HTMLCollectionHelper
 * Class provides static methods to perform checks and operations on arrays
 */

class HTMLCollectionHelper {
    // Class Methods

    /**
     * Converts a given HTMLCollection to an Array.
     * @param {HTMLCollection} htmlCollection - Collection to be converted.
     * @return {array} - Return an array.
     */
    static convertCollectionToArray(htmlCollection) {
        let array = [...htmlCollection];

        return array;
    }
}