"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class HTMLCollectionHelper
 * Class provides static methods to perform checks and operations on HTMLCollections
 */

var HTMLCollectionHelper = exports.HTMLCollectionHelper = function () {
  function HTMLCollectionHelper() {
    _classCallCheck(this, HTMLCollectionHelper);
  }

  _createClass(HTMLCollectionHelper, null, [{
    key: "convertCollectionToArray",

    // Class Methods

    /**
     * Converts a given HTMLCollection to an Array.
     * @param {HTMLCollection} htmlCollection - Collection to be converted.
     * @return {array} - Return an array.
     */
    value: function convertCollectionToArray(htmlCollection) {
      var array = [].concat(_toConsumableArray(htmlCollection));

      return array;
    }
  }]);

  return HTMLCollectionHelper;
}();