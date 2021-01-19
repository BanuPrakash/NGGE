import {Student} from './Student';

let students: Student[] = [
    new Student("Peter"),
    new Student("Raj")
];

students.forEach( s => {
    console.log(s.getName(), s["subject"]());
});