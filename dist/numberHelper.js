"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class NumberHelper
 * Class provides static methods to perform checks and operations on numbers
 */

var NumberHelper = exports.NumberHelper = function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "getRandomInteger",

    // Class Methods

    /**
     * Return a random integer between 0 and a given value.
     * @param {number} maxValue - Maximum value the returned integer can be.
     * @return {number} - Return an integer.
     */
    value: function getRandomInteger(maxValue) {
      var minValue = 0;

      // The maximum and minimum are both inclusive
      return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
  }]);

  return NumberHelper;
}();