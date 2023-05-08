import { Menu } from "./menu/Menu";
import { Student } from "./Student";
import { StudentManager } from "./StudentManager";
var readlineSync = require('readline-sync');

let studentManager = new StudentManager();
let newStudent1 = new Student(1, 'Manh TU', "C0223G1", "HANOI", 10, "doc sach")
let newStudent2 = new Student(2, 'Hieu', "C0223G2", "HANOI", 10, "hoc")
studentManager.students.push(newStudent1, newStudent2);

let start = true;
while (start){
    Menu.mainMenu()
    let choseMenu = +readlineSync.question('Chọn: ');
    switch (choseMenu){
        case 1:
            if (!studentManager.showStudents()){
                console.log('Chưa có sinh viên nào');
            }
            break;
        case 2:
            studentManager.searchStudent()
            break;
        case 3:
            if (!studentManager.addStudent()){
                console.log('Tạo thất bại');
            }
            break;
        case 4:
            studentManager.editStudent()
        case 5: 
            studentManager.removeStudent()
            break;
        default:
            start = false;
            break;
    
    }



}

