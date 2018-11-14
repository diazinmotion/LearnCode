"use strict";
// objects
// TS automatically set type according to existing datatype
// of an objects
var userData = {
    name: "Dave",
    age: 25
};
// we can set it (types) explicitly
var userData2 = {
    name: "Dave",
    age: 25
};
// complex object
var complex = {
    data: [100, 28, 3, 22],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 28, 3, 22],
    output: function (all) {
        return this.data;
    }
};
// union types
// multiple 2 types or more for a variable
var myRealRealAge = "27";
myRealRealAge = 27;
// return an error (not number or string)
// myRealRealAge = true;
// check types during runtime
var finalValue = 32; // implicitly any datatype
if (typeof finalValue == "number") {
    console.log("Final value is a number!");
}
