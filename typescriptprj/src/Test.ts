export function Course(config:any) {
    return function(target:any) {
        Object.defineProperty(target.prototype, "subject", { "value": () => config.name  });
    }
}

@Course({
    name: "Angular 11"
})
export class Student {
    constructor(private name:string){}
    getName(): string {
        return this.name;
    }
}

let students: Student[] = [
    new Student("Peter"),
    new Student("Raj")
];

students.forEach( s => {
    console.log(s.getName(), s["subject"]());
});
