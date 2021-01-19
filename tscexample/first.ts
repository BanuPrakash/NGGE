let firstName:String = "Smith";

let age:Number = 10;

// firstName = 1; error

interface Person {
    firstName:String,
    age:Number,
    address?:String
}


function printData(person:Person) : void {
    console.log(person.firstName, person.age, person.address);
}

printData({"firstName":"Danny","age": 34});


printData({"firstName":"tim","age": 34, "address" : "M G ROAD"});





