"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./menu/Menu");
var Student_1 = require("./Student");
var StudentManager_1 = require("./StudentManager");
var readlineSync = require('readline-sync');
var studentManager = new StudentManager_1.StudentManager();
var newStudent1 = new Student_1.Student(1, 'Manh TU', "10A", "HANOI", 10, "doc sach");
var newStudent2 = new Student_1.Student(2, 'Hieu', "10b", "HANOI", 10, "hoc");
studentManager.students.push(newStudent1, newStudent2);
var start = true;
while (start) {
    Menu_1.Menu.mainMenu();
    var choseMenu = +readlineSync.question('Chọn: ');
    switch (choseMenu) {
        case 1:
            if (!studentManager.showStudents()) {
                console.log('Chưa có sinh viên nào');
            }
            break;
        case 2:
            studentManager.searchStudent();
            break;
        case 3:
            if (!studentManager.addStudent()) {
                console.log('Tạo thất bại');
            }
            break;
        case 4:
            studentManager.editStudent();
        case 5:
            studentManager.removeStudent();
            break;
        default:
            start = false;
            break;
    }
}
