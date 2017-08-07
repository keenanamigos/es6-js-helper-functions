/**
 * @class ObjectHelper
 */

 export class ObjectHelper {
     /**
     * @constructor
     */
    constructor() {}

    // Class Methods
    static isObjectNullOrEmpty(object) {
        // Will return true if a non-object is passed in
        if (object === null || typeof object === "undefined" || object.constructor !== Object) return true;

        if (Object.keys(object).length === 0 && object.constructor === Object) return true;

        return false;
    }
 }