
let {sum} = require('../arithmetic');
let expect = require('chai').expect;
describe('Test arithmetics',function () {
    it('should have a correct sum', function (done) {
        var result= sum(1,2);
        expect(result).to.be.eq(3);
        done();
    });
    it('should have numbers', function (done) {
        var result = sum('string',5);
        expect(result).to.be.equal( "must be numbers");
        done();
    });
});