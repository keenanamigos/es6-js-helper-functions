/**
 * @class ArrayHelper
 */

 export class ArrayHelper {
     /**
     * @constructor
     */
    constructor() {}

    // Class Methods
    static isArrayNullOrEmpty(array) {
        if (array === null || typeof array === 'undefined') return true;

        if (!Array.isArray(array)) throw new TypeError(`${array} is not an Array.`);

        if (array.length === 0 && Array.isArray(array)) return true;

        return false;
    }
 }