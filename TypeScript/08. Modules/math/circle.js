System.register([], function (exports_1, context_1) {
    "use strict";
    var PImod;
    var __moduleName = context_1 && context_1.id;
    function calcCircumference(diameter) {
        return diameter * PImod;
    }
    exports_1("calcCircumference", calcCircumference);
    return {
        setters: [],
        execute: function () {
            exports_1("PImod", PImod = 3.14);
        }
    };
});
