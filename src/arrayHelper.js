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
        // Will return true if a non-array is passed in
        if (array === null || typeof array === 'undefined' || array.constructor !== Array) return true;

        if (array.length === 0 && array.constructor === Array) return true;

        return false;
    }
 }