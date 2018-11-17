"use strict";
var myName6 = "Max";
var myAge6 = 27;
var anything;
anything = 12;
// this even if it's error the compiler
// will still compile it to the js file
// if noEmitonError set to true
// myName6 = 22;
function controlMe(isTrue, somethingElse) {
    var result_cm;
    if (isTrue) {
        result_cm = 12;
    }
    result_cm = 33;
    return result_cm;
}
