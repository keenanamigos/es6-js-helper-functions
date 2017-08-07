"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BooleanHelper
 */

var DateHelper = exports.DateHelper = function () {
    /**
    * @constructor
    */
    function DateHelper() {
        _classCallCheck(this, DateHelper);
    }

    _createClass(DateHelper, null, [{
        key: "getFormattedCurrentDate",
        value: function getFormattedCurrentDate() {
            var currentDate = new Date();

            // January is 0 by default so 1 is added for formattting
            var month = currentDate.getMonth() + 1;

            if (month < 10) {
                month = "0" + month;
            }

            var day = currentDate.getDate();
            var year = currentDate.getFullYear();

            currentDate = DateHelper.formatDate(month, day, year);

            return currentDate;
        }
    }, {
        key: "formatDate",
        value: function formatDate(month, day, year) {
            return month + "/" + day + "/" + year;
        }
    }]);

    return DateHelper;
}();