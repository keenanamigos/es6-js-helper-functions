/**
 * @class DateHelper
 * Class to perform operations on Date values 
 */

 export class DateHelper {
     /**
     * @constructor
     */
    constructor() {}

    /**
     * Get the current date formatted as 08/08/2017.
     * @param {none}
     * @return {Date} - Return a formatted date in the form of month, day, year.
     */
    static getFormattedCurrentDate() {
        let currentDate = new Date();

        // January is 0 by default so 1 is added for formattting
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDate();
        let year = currentDate.getFullYear();

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
    static formatDate(month, day, year) {
        if (month < 10) {
            month = `0${month}`;
        }

        if (day < 10) {
            day = `0${day}`;
        }

        // Example of post-formatted date: 08/08/2017
        return `${month}/${day}/${year}`;
    }
 }