"use strict";
var MyMath;
(function (MyMath) {
    // nested namespaces
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        // export mean we can use this method outside
        // of the namespace
        function calcCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
