'use strict';

var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
chai.should();

xdescribe('Sinon Test', () => {
    var student, teacher;
    var kiemDiem = () => {
        console.log('Da bi kiem diem');
    }
    beforeEach( () => {
        student = {
            dropClass : (classId , callback ) => {
                callback();
            },
            sinhHoatLop : (teacher) => {
                teacher.isGVCN();
                if (teacher.isGVCN()) {
                    console.log('To chuc sinh hoat lop');
                    return true;
                }else{
                    console.log('Di nham lop roi');
                    return false;
                }
            }
        };

        teacher = {
            name : 'Antonio Conte',
            biKiemDiem : ( fn ) => {
                fn();
            },
            isGVCN : () => {
                return false;
            }
        }
    });
    describe('student.DropClass' , () => {
        it('should call the callback function', () => {
            // var called = false;
            // var callback = () => {
            //     called = true;
            // }
            // student.dropClass(1, callback);
            // called.should.be.true;
            var spy = sinon.spy();
            student.dropClass(1, spy);
            spy.called.should.be.true;
        });

        it('should call the kiemdiem function', () => {
            var spy = sinon.spy(kiemDiem);
            teacher.biKiemDiem(spy);
            spy.called.should.be.true;
        });

        it  ('Giao vien chu nhiem den dung lop', () => {
            var stubTeacher = sinon.stub(teacher);
            stubTeacher.isGVCN.returns(true);

            var SHL = student.sinhHoatLop(stubTeacher);
            SHL.should.be.true;
        });
    });
    describe('Mocks Testing', () => {
        it('mocks function', () => {
            var mockObj = sinon.mock(teacher);
            var expectation = mockObj.expects('isGVCN').twice();

            student.sinhHoatLop(teacher);
            expectation.verify();
        });
    });
}); 