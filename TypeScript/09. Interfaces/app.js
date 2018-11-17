"use strict";
function greetIn(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    gender: "Male",
    greet: function (lastName) {
        console.log("Hi, " + this.firstName + " " + lastName);
    }
};
// greetIn({firstName: "Max", age: 27});
changeName(person);
greetIn(person);
person.greet("Anything");
// implement interfaces on class
var PersonIn = /** @class */ (function () {
    function PersonIn() {
    }
    PersonIn.prototype.greet = function (lastName) {
        console.log("Hi, " + this.firstName + " " + lastName);
    };
    return PersonIn;
}());
var myPerson = new PersonIn();
myPerson.firstName = "Maxmilion";
myPerson.lastName = "Anything";
greetIn(myPerson);
myPerson.greet("Holande");
var myDoubleFunction;
myDoubleFunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
