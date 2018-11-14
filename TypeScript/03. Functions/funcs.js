"use strict";
// functions
var myFName = "Max";
function returnMyName() {
    return myFName;
}
console.log(returnMyName());
// void function
function sayHello() {
    console.log("Hello!");
}
sayHello();
// arguments function
function multiple(val1, val2) {
    return val1 * val2;
}
console.log(multiple(2, 3));
// function types
// we can assign a mthod to a variable
// and treat it like a function
var myMultiple;
myMultiple = sayHello;
myMultiple();
myMultiple = multiple;
console.log(myMultiple(5, 3));
// we can also specify function type to have a type
var myMultiple2;
myMultiple2 = multiple;
console.log(myMultiple2(3, 11));
