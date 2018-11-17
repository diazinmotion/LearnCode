"use strict";
var MyMath;
(function (MyMath) {
    // export mean we can use this method outside
    // of the namespace
    function calcRectangle(width, length) {
        return width * length;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
