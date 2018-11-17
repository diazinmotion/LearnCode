console.log("This is an exercise on ES6");

// Exercise 1
var double = function(value: any) {
    return value * 2;
};
console.log(double(10));

// Solution (simple arrow function)
const doubleES6 = (value: number) => value * 2;
console.log(doubleES6(10));

// Exercise 2
var greet = function (name: string) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet('');
greet("Anna");

// solution (default value param)
const greetES6 = (name: string = "Max") => {
    console.log("Hello,", name);
}
greetES6();
greetES6("Anna");

// Exercise 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

// solution spread operators
let numbersES6 = [-3, 33, 38, 5];
console.log(Math.min(...numbersES6));

// Exercise 4
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

// solution (rest operator)
let newArrayES6 = [55, 20];
const buildArray = (...args: number[]) => {
    return args;
}
console.log(buildArray(...newArrayES6));

// Exercise 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

// solution (destructuring array)
let testResultsES6 = [3.89, 2.99, 1.38];
const [resultES61, resultES62, resultES63] = testResults;
console.log(resultES61, resultES62, resultES63);

// Exercise 6
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);

// solution (destructuring object)
let scientistES6 = {firstName: "Will", experience: 12};
const {firstName: firstNameES6, experience: experienceES6} = scientistES6;
console.log(firstNameES6, experienceES6);
