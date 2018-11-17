"use strict";
// namespaces
// we use namespace to mitigate the risk of conflict
// between each method or variable
// namespace MyMath {
//     const PI = 3.14;
//     export function calcCircumference(diameter: number){
//         return diameter * PI;
//     }
//     // export mean we can use this method outside
//     // of the namespace
//     export function calcRectangle(width: number, length: number){
//         return width * length;
//     }
// }
// Manual Bundle (optional)
// to import the circleMath & rectangleMath
// we can bndle it into a single file with this command:
// tsc app.ts --outfile app.js [script1] [script2] [script3]
// the better way importing namespace
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
// and then execute the command:
// tsc app.ts --outfile app.js
var CircleMath = MyMath.Circle;
// will not conflict since it's not on namespace (global scope)
var PI = 2.99;
console.log(MyMath.calcRectangle(10, 20));
// console.log(MyMath.calcCircumference(3));
// access nested namespace just like in PHP
console.log(MyMath.Circle.calcCircumference(3));
console.log(CircleMath.calcCircumference(3));
console.log(PI);
