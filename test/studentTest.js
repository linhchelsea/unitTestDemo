'use strict';

var Student = require('../data/Student');
var Course = require('../data/Course');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('Student', () => {
    var studentName = 'Eden Hazard';
    var studentGrade = 5;
    it('should save the info on the student and create an id when create', () => {
        var student = Student.create(studentName, studentGrade);

        should.exist(student.name);
        student.name.should.be.eql(studentName);

        should.exist(student.grade);
        student.grade.should.be.eql(studentGrade);

        should.exist(student.id);
    });

    it('should increase the student\'s grade by 1 when advancedGrade is called', () => {
        var student = Student.create(studentName, studentGrade);

        student.advancedGrade(student);

        student.grade.should.be.eql(studentGrade + 1);
    });
});