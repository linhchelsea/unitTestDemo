'use strict';

var uuid = require('uuid');
function Student(){};

Student.create = (name , grade) => {
    var student = new Student();

    student.id = uuid.v4();
    student.name = name;
    student.grade = grade;

    return student;
};

var _p = Student.prototype;

_p.advancedGrade = (student) => {
    student.grade++;
};

_p.toString = () => {
    return this.id + '\t' + this.name;
};

module.exports = Student;