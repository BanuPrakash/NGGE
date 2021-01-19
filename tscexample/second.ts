function forEach<T>(elems:T[], action: Function) : void {
    for(let i = 0 ; i < elems.length; i ++) {
        action(elems[i]);
    }
}

let data:number[] = [662,2,72,77];

let names:Array<string> = ["George","jack","Larry"];

forEach(data, console.log);

forEach(names, console.log);