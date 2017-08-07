"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ObjectHelper
 */

var ObjectHelper = exports.ObjectHelper = function () {
    /**
    * @constructor
    */
    function ObjectHelper() {
        _classCallCheck(this, ObjectHelper);
    }

    _createClass(ObjectHelper, null, [{
        key: "isObjectNullOrEmpty",
        value: function isObjectNullOrEmpty(object) {
            // Will return true if a non-object is passed in
            if (object === null || typeof object === "undefined" || object.constructor !== Object) return true;

            if (Object.keys(object).length === 0 && object.constructor === Object) return true;

            return false;
        }
    }]);

    return ObjectHelper;
}();