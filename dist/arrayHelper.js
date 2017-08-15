'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ArrayHelper
 * Class provides static methods to perform checks and operations on arrays
 */

var ArrayHelper = exports.ArrayHelper = function () {
  /**
  * @constructor
  */
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  // Class Methods

  /**
   * Performs a check to see if a given array is null or empty.
   * @param {array} array - Array to be checked.
   * @return {boolean} - Return true or false dependent on if the array is null or empty.
   */


  _createClass(ArrayHelper, null, [{
    key: 'isArrayNullOrEmpty',
    value: function isArrayNullOrEmpty(array) {
      if (array === null || typeof array === 'undefined') return true;

      if (!Array.isArray(array)) throw new TypeError(array + ' is not an Array.');

      if (array.length === 0 && Array.isArray(array)) return true;

      return false;
    }
  }]);

  return ArrayHelper;
}();