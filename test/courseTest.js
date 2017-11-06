'use strict';

var Student = require('../data/Student');
var Course = require('../data/Course');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe.only('Course Test', () => {
    var courseName = 'Introduction to Awesome';
    var courseCode = 'AWE 101';
    var courseDescription = 'This course will make you awesome!';

    beforeEach( () => {

    });
    it('should save data correctly', () => {
        var course = Course.create(courseName,courseCode,courseDescription);

        should.exist(course.name);
        should.exist(course.code);
        should.exist(course.description);

        should.exist(course.students);
        course.students.should.be.eql([]);
    
        should.exist(course.times);
        course.times.should.be.eql([]);
    });
    describe('Register Student', () => {
        it('should add the student to the students array', () => {
            var course = Course.create(courseName,courseCode,courseDescription);
            var student = Student.create('Eden Hazard', 5 );

            course.registerStudent(course, student);
            course.students.length.should.be.eql(1);
            course.students[0].id.should.be.eql(student.id);
        });
    });

    describe('Unregister Student', () => {
        it('should throw an error when we try to remove a student  that isnt in the class', () => {
            var course = Course.create(courseName,courseCode,courseDescription);
            var student = Student.create('Eden Hazard', 5 );

            expect( () => {
                course.unregisterStudent('asdd');
            }).to.throw();
        });
    });

    describe('Add Times', () => {
        it('should add the given days/times to the course', () => {
            var course = Course.create(courseName,courseCode,courseDescription);
            var days = ['Monday','Wednesday','Friday'];
            var times = ['14:00', '16:00'];
            
            course.addTime(course,days, times);
            course.times.length.should.be.eql(6);
            course.times[0].should.be.eql({
                day : 'Monday',
                time : '14:00'
            });
        });

        it('should throw an error when we pass a invalid day', () => {
            var course = Course.create(courseName,courseCode,courseDescription);
            var day = 'Ngay Quoc te lao dong';
            var time = '10:00';
            
            expect( () =>{
                course.addTime(course,day,time);
            }).to.throw();
        });
    });
});