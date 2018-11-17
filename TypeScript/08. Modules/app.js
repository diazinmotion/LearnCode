System.register(["./math/circle.js"], function (exports_1, context_1) {
    "use strict";
    var circle_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (circle_js_1_1) {
                circle_js_1 = circle_js_1_1;
            }
        ],
        execute: function () {
            console.log(circle_js_1.PImod);
            console.log(circle_js_1.calcCircumference(10));
        }
    };
});
