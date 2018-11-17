// demo on modules
// import { PImod, calcCircumference } from "./math/circle.js";
// import { calcRect } from "./math/rectangle.js";
System.register(["./math/circle.js", "./math/rectangle.js"], function (exports_1, context_1) {
    "use strict";
    var Circle, rectangle_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Circle_1) {
                Circle = Circle_1;
            },
            function (rectangle_js_1_1) {
                rectangle_js_1 = rectangle_js_1_1;
            }
        ],
        execute: function () {
            console.log(Circle.PImod);
            // console.log(calcCircumference(10));
            console.log(Circle.calcCircumference(10));
            console.log(rectangle_js_1.default(20, 10));
        }
    };
});
