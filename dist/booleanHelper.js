"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BooleanHelper
 * Class provides static methods to perform checks and operations on boolean values
 */

var BooleanHelper = exports.BooleanHelper = function () {
    function BooleanHelper() {
        _classCallCheck(this, BooleanHelper);
    }

    _createClass(BooleanHelper, null, [{
        key: "isBoolean",

        // Class Methods

        /**
         * Performs a check to see if a given value is of type boolean.
         * @param {any} value - Value to be checked to determine if it is a boolean.
         * @return {boolean} - Return true or false dependent on if the given value is of type boolean.
         */
        value: function isBoolean(value) {
            if (value.constructor === Boolean) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Convert a given boolean to a corresponding integer value
         * @param {boolean} value - Boolean to be converted.
         * @return {number} - Return the proper integer value given a true or false parameter.
         */

    }, {
        key: "convertBooleanToInt",
        value: function convertBooleanToInt(value) {
            if (BooleanHelper.isBoolean(value)) {
                if (value === true) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                throw new TypeError(value + " is not a Boolean.");
            }
        }
    }]);

    return BooleanHelper;
}();