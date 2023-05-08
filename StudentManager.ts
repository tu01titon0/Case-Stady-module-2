import { Menu } from "./menu/Menu";
import { Student } from "./Student";
import { studentCodeValidation } from "./validate";
import { studentNameValidation } from "./validate";
import { classNameValidation } from "./validate";
var readlineSync = require('readline-sync');

export class StudentManager {
    students: Student[] = [];

    addStudent(){
        let classDefault : string[]=['C0223G1','C0223H1','C0223A1','C0223E1'];
        let studentID = (this.students.length > 0) ? this.students.length : 1;
        let studentName = readlineSync.question('Name: ');
        while (!studentNameValidation.test(studentName)) {
            studentName = readlineSync.question(
              `\nWrong input, retype the student's name without number or special characters: `
            );
        }
        let studentClass = readlineSync.keyInSelect(classDefault,`Enter class: `);
        while (!classNameValidation.test(studentClass)) {
            studentClass = readlineSync.question(
              `\nWrong input, retype the class from 0 - 3: `
            );
          }
        let studentAddress = readlineSync.question('Address: ');
        while (!studentNameValidation.test(studentAddress)) {
            studentAddress = readlineSync.question(
              `\nWrong input, retype the student's home town without number or special characters:  `
            );
        }
        let studentScore = readlineSync.question('Score: ');
        while (isNaN(studentScore) || studentScore > 10 || studentScore < 0) {
            studentScore = +readlineSync.question(
              `\nWrong input, type in student's score from 0 - 10:  `
            );
          }
        let studentHobby = readlineSync.question('Hobby: ');
        
        if (studentName && studentClass && studentAddress && studentScore && studentHobby){
            let newStudent = new Student(studentID, studentName, studentClass, studentAddress, studentScore, studentHobby)
            this.students.push(newStudent)
            console.log('tao thanh cong');
            return true;
        } else {
            return false;
        }
    }
    
    showStudents(): boolean{
        let fiveStudents :Student[] = []
        if(this.students.length > 0){
            for(let i = 0; i < this.students.length; i++){
                fiveStudents.push(this.students[i])
                if (i >= 4){
                    break;
                }
            }
            console.table(fiveStudents)
            return true
        }
        return false 
    }
    searchStudent(): boolean {
        let inputName = readlineSync.question(`Input Name of Student: `)
        let listApproximateNameStudent: Student[] = [];
        this.students.forEach(elements => {
            if (elements.studentName.toLowerCase().includes(inputName.toLowerCase())) {
                listApproximateNameStudent.push(elements);
            }
        })
        if (listApproximateNameStudent.length === 0) {
            console.log(`No data matching! `)
            return false;
        } else {
            console.table(listApproximateNameStudent)
            return true;
        }
    }
    
    findIndexStudentByID(){
        let idStudent = +readlineSync.question(`Nhập id sinh viên: `)
        return this.students.findIndex(elements => idStudent === elements.studentCode);
    }
    
    editStudent(){
    let start = true
    
    let indexUser = this.findIndexStudentByID()
    while(start){
        if( indexUser !== -1){
            Menu.menuEdit()
            let chose = +readlineSync.question('Chon: ');
            switch(chose){
                case 1 :
                    let studentName = readlineSync.question('Name: ');
                    if(studentName && (this.students[indexUser].studentName = studentName)){
                        console.log("Edit thanh cong");
                    }
                    break;
                case 2 :
                    let classDefault : string[]=['C0223G1','C0223H1','C0223A1','C0223E1'];
                    let studentClass = readlineSync.keyInSelect(classDefault,`Enter class: `);
                    if(studentClass && (this.students[indexUser].studentClass = studentClass)){
                        console.log("Edit thanh cong");
                    }
                    break;
                case 3 :
                    let studentAddress = readlineSync.question('Address: ');
                    if(studentAddress && (this.students[indexUser].address = studentAddress)){
                        console.log("Edit thanh cong");
                    }
                    break;
                case 4 :
                    let studentScore = readlineSync.question('Score: ');
                    if(studentScore && (this.students[indexUser].score = studentScore)){
                        console.log("Edit thanh cong");
                    }
                    break;
                case 5 :
                    let studentHobby = readlineSync.question('Hobby: ');
                    if(studentHobby && (this.students[indexUser].hobby = studentHobby)){
                        console.log("Edit thanh cong");
                    }
                    break;
                default:
                    start  = false;
                    break;
            }
        } else{
            console.log('Không tìm thấy sinh viên');
            return false
        }
        
    }
        
    }
    
    removeStudent(){
        let index = this.findIndexStudentByID()
        if(index===-1){
            console.log(`Not existed Student need to delete!`);
            return;
        }
        this.students.splice(index, 1);
        console.log('Delete Student Successful!');
    }
}