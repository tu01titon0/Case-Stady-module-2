"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(studentCode, studentName, studentClass, address, score, hobby) {
        this.studentCode = studentCode;
        this.studentName = studentName;
        this.studentClass = studentClass;
        this.address = address;
        this.score = score;
        this.hobby = hobby;
    }
    Object.defineProperty(Student.prototype, "hobby", {
        get: function () {
            return this._hobby;
        },
        set: function (value) {
            this._hobby = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "studentCode", {
        get: function () {
            return this._studentCode;
        },
        set: function (value) {
            this._studentCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "studentName", {
        get: function () {
            return this._studentName;
        },
        set: function (value) {
            this._studentName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "studentClass", {
        get: function () {
            return this._studentClass;
        },
        set: function (value) {
            this._studentClass = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
