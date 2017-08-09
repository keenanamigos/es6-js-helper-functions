var expect = require('chai').expect;

describe('formatDate', () => {
    const DateHelper = require('../dist/dateHelper').DateHelper;

    it('should return a properly formatted date', () => {
        const month = 8;
        const day = 6;
        const year = 2018;
        
        let someDate = DateHelper.formatDate(month, day, year);
        expect(someDate).to.equal("08/06/2018");
    });
});