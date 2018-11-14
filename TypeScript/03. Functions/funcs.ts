// functions
var myFName = "Max";
function returnMyName(): string {
    return myFName;
}
console.log(returnMyName());

// void function
function sayHello(): void {
    console.log("Hello!");
}
sayHello();

// arguments function
function multiple(val1: number, val2: number): number {
    return val1 * val2;
}
console.log(multiple(2, 3));

// function types
// we can assign a mthod to a variable
// and treat it like a function
let myMultiple;
myMultiple = sayHello;
myMultiple();

myMultiple = multiple;
console.log(myMultiple(5, 3));

// we can also specify function type to have a type
let myMultiple2: (value1: number, value2: number) => number;
myMultiple2 = multiple;
console.log(myMultiple2(3, 11));