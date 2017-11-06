'use strict';

function Course (){};

Course.create = (courseName, courseCode, courseDescription) => {
    var course = new Course();

    course.code = courseCode;
    course.name = courseName;
    course.description = courseDescription;
    course.students = [];
    course.times = [];

    return course;
};

var _p = Course.prototype;

_p.registerStudent = (course, student) => {
    course.students.push(student);
};

_p.unregisterStudent = (studentId)  => {
    var me = this;

    if( ! this.students.some( (student, i) => {
        if (student.id === studentId ){
            me.students.splice(i , 1);
            return true;
        }
    })){
        throw new Error('Student '+ studentId + 'is not register for this course');
    }
};

_p.addTime = (course, days, times) => {

    if(! Array.isArray(days) ){
        days = [days];
    }

    if(! Array.isArray(times) ){
        times = [times];
    }

    var validDays = [
        'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
    ];


    days.forEach(( day ) => {
        if ( validDays.indexOf(day) === -1 ){
            throw new Error ('The day is invalid');
        }
        times.forEach( (time) => {
            course.times.push({
                day : day,
                time : time
            });
        });
    });
};

_p.showSchedule = () => {
    var scheduleString = '',
        first = true;
    
    this.times.forEach( (time) => {
        if(! first) {
            scheduleString += '\n';
        }
        first = false;
        scheduleString += time.day + ' at '+ time.time;
    });

    return scheduleString;
};

_p.showStudents = () => {
    var studentString = '',
    first = true;

this.students.forEach( (student) => {
    if(! first) {
        studentString += '\n';
    }
    first = false;
    studentString += student.toString();
});

return studentString;
};

module.exports = Course;