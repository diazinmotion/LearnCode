"use strict";
// simple Generics
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
// the better way for generic function
// <T> just like in C# and Java
// for function, instead of any type we better use generic type
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Max", age: 27 }));
// built-in generics
var testResults2 = [1.94, 2.33];
testResults2.push(-2.99);
// testResults.push("Anna"); // will error because of type mismatch
// arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Orange', 'Banana']);
// generic types (ES6)
var echo2 = betterEcho;
console.log(echo2("Something"));
// generic class
// we can extends T to specify existing type
// number | string means generic with constraint
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        // return this.baseValue * this.multiplyValue;
        // we should change it to this:
        // because typescript detect that whenever our class type is string
        // this mehtod wont be funct.
        // we add plus (+) to set this as number
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "20";
simpleMath.multiplyValue = "10";
console.log(simpleMath.calculate());
