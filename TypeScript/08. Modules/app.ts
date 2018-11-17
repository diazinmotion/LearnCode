// demo on modules
// import { PImod, calcCircumference } from "./math/circle.js";
// import { calcRect } from "./math/rectangle.js";

// import every methods
import * as Circle from "./math/circle.js";

// we can use any name as the calcRect is the default method
import calc from "./math/rectangle.js";


console.log(Circle.PImod);
// console.log(calcCircumference(10));
console.log(Circle.calcCircumference(10));
console.log(calc(20, 10));