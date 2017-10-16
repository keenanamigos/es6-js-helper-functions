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
        if (Number.isNaN(maxValue)) {
            throw new TypeError(`${maxValue} is not a number.`);
        } 

        const minValue = 0;

        // The maximum and minimum are both inclusive
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; 
     }
 }