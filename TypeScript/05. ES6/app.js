"use strict";
// let & const
var variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);
// const
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // wont work
// block scope
function reset() {
    // even the same name, it's not the same variable
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow function
console.log("Arrow Functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
// arrow function
// if we have one operation
// const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
// if we have multiple operation
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(9, 33));
// arrow function variation
// no parameters argument
var greetES6Prob = function () {
    console.log("Hello");
};
greetES6Prob();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Dave");
// default param
console.log("Default Parameters");
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown(20);
// Spread (...)
console.log("Rest & Spread");
var numbers6 = [1, 2, 3, 4, 5];
// Math.max accept param and not array
// with spread operator we can convert an array
// to a param format [1,2,3,4] => (1,2,3,4)
console.log(Math.max.apply(Math, numbers6));
// Rest
// turn simple param (args) into an array
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 3));
// destructuring an array
console.log("Destructuring");
var hobbies6 = ["Cooking", "Sports"];
// store in variable
var hobbies61 = hobbies6[0];
var hobbies62 = hobbies6[1];
console.log(hobbies61, hobbies62);
// the better way
var hobby1 = hobbies6[0], hobby2 = hobbies6[1];
console.log(hobby1, hobby2);
// destructuring objects
var userData6 = { username: "Max", age: 27 };
var uName = userData6.username;
var uAge = userData6.age;
console.log(uName, uAge);
// the better way
// {username, age} must fit with index name on the object data
var username = userData6.username, age = userData6.age;
console.log(username, age);
// or we can assign a custom name
var uName1 = userData6.username, uAge1 = userData6.age;
console.log(uName1, uAge1);
// template literals
var userName7 = "Max";
// const greeting = "Hello, I'm " + userName7 + ", I'm so cool!";
// complex string (multiline)
var greeting = "This is a heading!\nI'm " + userName7 + ".\nThis is cool!\n";
console.log(greeting);
