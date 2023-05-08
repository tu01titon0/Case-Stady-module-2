"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var Menu_1 = require("./menu/Menu");
var Student_1 = require("./Student");
var readlineSync = require('readline-sync');
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.addStudent = function () {
        var studentID = (this.students.length > 0) ? this.students.length : 1;
        var studentName = readlineSync.question('Name: ');
        var studentClass = readlineSync.question('Class: ');
        var studentAddress = readlineSync.question('Address: ');
        var studentScore = readlineSync.question('Score: ');
        var studentHobby = readlineSync.question('Hobby: ');
        if (studentName && studentClass && studentAddress && studentScore && studentHobby) {
            var newStudent = new Student_1.Student(studentID, studentName, studentClass, studentAddress, studentScore, studentHobby);
            this.students.push(newStudent);
            console.log('tao thanh cong');
            return true;
        }
        else {
            return false;
        }
    };
    StudentManager.prototype.showStudents = function () {
        var fiveStudents = [];
        if (this.students.length > 0) {
            for (var i = 0; i < this.students.length; i++) {
                fiveStudents.push(this.students[i]);
                if (i >= 4) {
                    break;
                }
            }
            console.table(fiveStudents);
            return true;
        }
        return false;
    };
    StudentManager.prototype.searchStudent = function () {
        var inputName = readlineSync.question("Input Name of Student: ");
        var listApproximateNameStudent = [];
        this.students.forEach(function (elements) {
            if (elements.studentName.toLowerCase().includes(inputName.toLowerCase())) {
                listApproximateNameStudent.push(elements);
            }
        });
        if (listApproximateNameStudent.length === 0) {
            console.log("No data matching! ");
            return false;
        }
        else {
            console.table(listApproximateNameStudent);
            return true;
        }
    };
    StudentManager.prototype.findIndexStudentByID = function () {
        var idStudent = +readlineSync.question("Nh\u1EADp id sinh vi\u00EAn: ");
        return this.students.findIndex(function (elements) { return idStudent === elements.studentCode; });
    };
    StudentManager.prototype.editStudent = function () {
        var start = true;
        var indexUser = this.findIndexStudentByID();
        while (start) {
            if (indexUser !== -1) {
                Menu_1.Menu.menuEdit();
                var chose = +readlineSync.question('Chon: ');
                switch (chose) {
                    case 1:
                        var studentName = readlineSync.question('Name: ');
                        if (studentName && (this.students[indexUser].studentName = studentName)) {
                            console.log("Edit thanh cong");
                        }
                        break;
                    case 2:
                        var studentClass = readlineSync.question('Class: ');
                        if (studentClass && (this.students[indexUser].studentClass = studentClass)) {
                            console.log("Edit thanh cong");
                        }
                        break;
                    case 3:
                        var studentAddress = readlineSync.question('Address: ');
                        if (studentAddress && (this.students[indexUser].address = studentAddress)) {
                            console.log("Edit thanh cong");
                        }
                        break;
                    case 4:
                        var studentScore = readlineSync.question('Score: ');
                        if (studentScore && (this.students[indexUser].score = studentScore)) {
                            console.log("Edit thanh cong");
                        }
                        break;
                    case 5:
                        var studentHobby = readlineSync.question('Hobby: ');
                        if (studentHobby && (this.students[indexUser].hobby = studentHobby)) {
                            console.log("Edit thanh cong");
                        }
                        break;
                    default:
                        start = false;
                        break;
                }
            }
            else {
                console.log('Không tìm thấy sinh viên');
                return false;
            }
        }
    };
    StudentManager.prototype.removeStudent = function () {
        var index = this.findIndexStudentByID();
        if (index === -1) {
            console.log("Not existed Student need to delete!");
            return;
        }
        this.students.splice(index, 1);
        console.log('Delete Student Successful!');
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
