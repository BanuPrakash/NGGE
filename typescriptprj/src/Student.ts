import {Course} from './Course';

@Course({
    name: "Angular 11"
})
export class Student {
    constructor(private name:string){}
    getName(): string {
        return this.name;
    }
}

