"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BooleanHelper
 */

var BooleanHelper = exports.BooleanHelper = function () {
    /**
    * @constructor
    */
    function BooleanHelper() {
        _classCallCheck(this, BooleanHelper);
    }

    // Class Methods


    _createClass(BooleanHelper, null, [{
        key: "isBoolean",
        value: function isBoolean(value) {
            if (value === true || value === false) {
                return true;
            } else {
                return false;
            }
        }
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
                return value;
            }
        }
    }]);

    return BooleanHelper;
}();