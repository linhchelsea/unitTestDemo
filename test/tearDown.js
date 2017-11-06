'use strict';

var article = require('../data/Articles');
var chai = require('chai');
var expect = chai.expect;

describe.only('Tear Down', () => {
    var number=5;
    beforeEach( () => {
        number = 5;
    });
    it('should show 10 when adding num to 5', () => {
        number = article.add(number,5);
        number.should.be.eql(10);
    });
    it('should show 15 when adding num to 10', () => {
        number = article.add(number,10);
        number.should.be.eql(15);
    });
});