export class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }

    getName() {
        return this.name;
    }

    // property
    get details() {
        return this.name + "," + this.age;
    }
}