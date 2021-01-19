var firstName = "Smith";
var age = 10;
function printData(person) {
    console.log(person.firstName, person.age, person.address);
}
printData({ "firstName": "Danny", "age": 34 });
printData({ "firstName": "tim", "age": 34, "address": "M G ROAD" });
