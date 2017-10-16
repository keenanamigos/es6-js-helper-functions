/**
 * @class NumberHelper
 * Class provides static methods to perform checks and operations on numbers
 */

 export class NumberHelper {
     // Class Methods

    /**
     * Return a random integer between 0 and a given value.
     * @param {number} maxValue - Maximum value the returned integer can be.
     * @return {number} - Return an integer.
     */
    static getRandomInteger(maxValue) {
        const minValue = 0;

        // The maximum and minimum are both inclusive
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; 
     }

    /**
     * Determine if a given number is greater than zero.
     * @param {number} number - Number to be checked.
     * @return {boolean} - Return an boolean based on if the given value is greater than or less than zero.
     */
     static isGreaterThanZero(number) {
         if (!Number.isNaN(number) && number > 0) {
             return true;
         }

         return false;
     }
 }