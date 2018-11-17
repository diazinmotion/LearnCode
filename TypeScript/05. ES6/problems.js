"use strict";
console.log("This is an exercise on ES6");
// Exercise 1
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// Solution (simple arrow function)
var doubleES6 = function (value) { return value * 2; };
console.log(doubleES6(10));
// Exercise 2
var greet = function (name) {
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet('');
greet("Anna");
// solution (default value param)
var greetES6 = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello,", name);
};
greetES6();
greetES6("Anna");
// Exercise 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// solution spread operators
var numbersES6 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersES6));
// Exercise 4
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
// solution (rest operator)
var newArrayES6 = [55, 20];
var buildArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log(buildArray.apply(void 0, newArrayES6));
// Exercise 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
// solution (destructuring array)
var testResultsES6 = [3.89, 2.99, 1.38];
var resultES61 = testResults[0], resultES62 = testResults[1], resultES63 = testResults[2];
console.log(resultES61, resultES62, resultES63);
// Exercise 6
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
// solution (destructuring object)
var scientistES6 = { firstName: "Will", experience: 12 };
var firstNameES6 = scientistES6.firstName, experienceES6 = scientistES6.experience;
console.log(firstNameES6, experienceES6);
