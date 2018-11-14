"use strict";
// string
var myName = 'Dimas';
// myName = 1 // This will throw an error due to mismatch type
// number
var myAge = 25;
// boolean
var hasHobbies = true;
// assign type explicitly
var myRealAge;
myRealAge = 25;
// will not error due to 'any' datatype
// because we dont assign the type from initialization
myRealAge = '27';
// we assign a datatype explicitly
var myAgeType;
myAgeType = 25;
// myAgeType = '27' // will throw an error
// any datatype
var car = "BMW";
console.log(car);
// set to json object
car = { brand: "BMW", color: "Red" };
console.log(car);
