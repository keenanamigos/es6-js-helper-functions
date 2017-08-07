"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class NullHelper
 */

var NullHelper = exports.NullHelper = function () {
    /**
    * @constructor
    */
    function NullHelper() {
        _classCallCheck(this, NullHelper);
    }

    // Class Methods


    _createClass(NullHelper, null, [{
        key: "convertNullToZero",
        value: function convertNullToZero(input) {
            if (input === null) {
                return 0;
            } else {
                return input;
            }
        }
    }]);

    return NullHelper;
}();