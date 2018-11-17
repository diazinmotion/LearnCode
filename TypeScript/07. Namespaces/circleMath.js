"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    // export mean we can use this method outside
    // of the namespace
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
