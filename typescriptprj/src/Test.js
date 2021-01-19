"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Student = exports.Course = void 0;
function Course(config) {
    return function (target) {
        Object.defineProperty(target.prototype, "subject", { "value": function () { return config.name; } });
    };
}
exports.Course = Course;
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student = __decorate([
        Course({
            name: "Angular 11"
        })
    ], Student);
    return Student;
}());
exports.Student = Student;
var students = [
    new Student("Peter"),
    new Student("Raj")
];
students.forEach(function (s) {
    console.log(s.getName(), s["subject"]());
});
