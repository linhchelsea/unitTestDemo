'use strict';

var article = require('../data/Articles');
var chai = require('chai');
var expect = chai.expect;

chai.should();

describe.only('Article', () => {
    it('Should show this is a even number', () => {
        article.isEven(2).should.be.true;
    });
    it('Should throw error when we try to check number 0', () => {
        expect( () => {
            article.isEven(0);
        }).to.throw;
    });
    it('Should show this is a triangle', () => {
        article.isTriangle(3,2,2).should.be.true;
    });
    it('Should show the result Triangle of Pytago', () => {
        article.pytago(6,8).should.be.eql(100);
    });
});