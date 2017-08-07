/**
 * @class NullHelper
 */

 export class NullHelper {
     /**
     * @constructor
     */
    constructor() {}

    // Class Methods
    static convertNullToZero(input) {
        if (input === null) {
            return 0;
        } else {
            return input;
        }
    }
 }