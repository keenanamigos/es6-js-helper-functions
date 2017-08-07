/**
 * @class BooleanHelper
 */

 export class BooleanHelper {
     /**
     * @constructor
     */
    constructor() {}

    // Class Methods
    static isBoolean(value) {
        if (value.constructor === Boolean) {
            return true;
        } else {
            return false;
        }
    }

    static convertBooleanToInt(value) {
        if (BooleanHelper.isBoolean(value)) {
            if (value === true) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return value;
        }
    }
 }