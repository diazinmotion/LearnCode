"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("This is an exercise on Chapter Classes");
// Exercise 1
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
// solution (simple class)
var CarTS = /** @class */ (function () {
    function CarTS(name) {
        this.acceleration = 0;
        this.name = name;
    }
    CarTS.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    CarTS.prototype.accelerate = function (speed) {
        this.acceleration = speed;
    };
    return CarTS;
}());
var carts = new CarTS("BMW");
carts.honk();
console.log(carts.acceleration);
carts.accelerate(10);
console.log(carts.acceleration);
// Exercise 2
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
// solution (simple properties with inheritance)
var BaseObjectTS = /** @class */ (function () {
    function BaseObjectTS() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObjectTS;
}());
var RectangleTS = /** @class */ (function (_super) {
    __extends(RectangleTS, _super);
    function RectangleTS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectangleTS.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return RectangleTS;
}(BaseObjectTS));
var rectanglets = new RectangleTS();
rectanglets.width = 5;
rectanglets.length = 2;
console.log(rectanglets.calcSize());
// Exercise 3
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
// solution (simple setter & getter)
var PersonTS = /** @class */ (function () {
    function PersonTS() {
        this._firstName = "";
    }
    Object.defineProperty(PersonTS.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonTS;
}());
var personts = new PersonTS();
console.log(personts.firstName);
personts.firstName = "Ma";
console.log(personts.firstName);
personts.firstName = "Maximilian";
console.log(personts.firstName);
