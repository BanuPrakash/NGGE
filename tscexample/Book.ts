class Book {
   
    constructor(private title:string, private amt:number) {
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(name:string) : void {
        this.title = name;
    }
}

let b = new Book("A", 445.33);
console.log(b.getTitle());
// console.log(b.title);