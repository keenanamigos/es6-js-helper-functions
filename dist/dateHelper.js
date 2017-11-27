"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class DateHelper
 * Class to perform operations on Date values 
 */

var DateHelper = exports.DateHelper = function () {
	function DateHelper() {
		_classCallCheck(this, DateHelper);
	}

	_createClass(DateHelper, null, [{
		key: "getFormattedCurrentDate",

		// Class Methods

		/**
      * Get the current date formatted as 08/08/2017.
      * @param {none}
      * @return {Date} - Return a formatted date in the form of month, day, year.
      */
		value: function getFormattedCurrentDate() {
			var currentDate = new Date();

			// January is 0 by default so 1 is added for formattting
			var month = currentDate.getMonth() + 1;
			var day = currentDate.getDate();
			var year = currentDate.getFullYear();

			currentDate = DateHelper.formatDate(month, day, year);

			return currentDate;
		}

		/**
      * Convert a given boolean to a corresponding integer value
      * @param {number} month - A given month.
      * @param {number} day - A given day.
      * @param {number} year - A given year.
      * @return {string} - Return the formatted date as a string.
      */

	}, {
		key: "formatDate",
		value: function formatDate(month, day, year) {
			if (month < 10) {
				month = "0" + month;
			}

			if (day < 10) {
				day = "0" + day;
			}

			// Example of post-formatted date: 08/08/2017
			return month + "/" + day + "/" + year;
		}
	}]);

	return DateHelper;
}();