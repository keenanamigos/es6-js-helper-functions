"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ObjectHelper
 * Class to perform checks and operations on objects. 
 */

var ObjectHelper = exports.ObjectHelper = function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isObjectNullOrEmpty",

    // Class Methods

    /**
     * Perform a check to see if a given object is null or empty.
     * @param {object} object - The object to be checked.
     * @return {boolean} - Return a boolean dependent on whether the given object was null or empty. 
     */
    value: function isObjectNullOrEmpty(object) {
      if (object === null || typeof object === "undefined") return true;

      if (object.constructor !== Object) throw new TypeError(object + " is not an Object.");

      if (Object.keys(object).length === 0 && object.constructor === Object) return true;

      return false;
    }
  }]);

  return ObjectHelper;
}();