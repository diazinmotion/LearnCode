System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    // since it's the only method then we can set it as default
    function calcRect(width, length) {
        return width * length;
    }
    exports_1("default", calcRect);
    return {
        setters: [],
        execute: function () {
        }
    };
});
