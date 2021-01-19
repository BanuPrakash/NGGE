import {Person} from './Person';

let add = (x,y) => x + y;

console.log(add(2,3));

let p1 = new Person("a", 22);
let p2 = new Person("b", 26);

console.log(p1.getName());

console.log(p1.details);

let x = p2.details;

console.log(x);



