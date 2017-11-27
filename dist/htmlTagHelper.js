"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HTMLTagHelper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _htmlCollectionHelper = require("./htmlCollectionHelper");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class HTMLTagHelper
 * Class provides static methods to perform checks and operations on arrays
 */

var HTMLTagHelper = exports.HTMLTagHelper = function () {
	function HTMLTagHelper() {
		_classCallCheck(this, HTMLTagHelper);
	}

	_createClass(HTMLTagHelper, null, [{
		key: "secureTargetBlankAnchorTags",

		// Class Methods

		/**
      * Properly secures a collection of anchor tags that make use of target="_blank".
      * @param {HTMLCollection} htmlCollection - Collection of anchor tags to be secured.
      * @return {void}
      */
		value: function secureTargetBlankAnchorTags(htmlCollection) {
			var arrayOfAnchorTags = _htmlCollectionHelper.HTMLCollectionHelper.convertCollectionToArray(htmlCollection);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = arrayOfAnchorTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var anchorTag = _step.value;

					if (HTMLTagHelper.isTargetBlankSecure(anchorTag)) {
						continue;
					} else if (anchorTag.rel !== "") {
						anchorTag.rel += " noopener noreferrer"; // Add space between previous attribute value and noopener
					} else {
						anchorTag.rel = "noopener noreferrer";
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		/**
      * Checks to see if anchor elements containing target="_blank" are properly secured.
      * @param {HTMLAnchorElement} anchorTag - Anchor tag to be checked.
      * @return {boolean} - Return a boolean based on if an element where target="_blank" also includes noopener and noreferrer in the rel attribute.
      */

	}, {
		key: "isTargetBlankSecure",
		value: function isTargetBlankSecure(anchorTag) {
			if (anchorTag.target === "_blank") {
				return anchorTag.rel.includes("noopener noreferrer");
			}
		}
	}]);

	return HTMLTagHelper;
}();