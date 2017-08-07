/**
 * @class BooleanHelper
 */

 export class DateHelper {
     /**
     * @constructor
     */
    constructor() {}

    static getFormattedCurrentDate() {
        let currentDate = new Date();

        // January is 0 by default so 1 is added for formattting
        let month = currentDate.getMonth() + 1;

        if (month < 10) {
            month = "0" + month;
        }

        let day = currentDate.getDate();
        let year = currentDate.getFullYear();

        currentDate = DateHelper.formatDate(month, day, year);

        return currentDate;
    }

    static formatDate(month, day, year) {
        return month + "/" + day + "/" + year;
    }
 }