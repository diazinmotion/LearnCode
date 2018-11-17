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
// classes
var Person = /** @class */ (function () {
    // constructor
    // public username means we tell TS to create a username property
    // and assign it directly (if not null) to that property
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        // this.name refers to the property
        this.name = name;
    }
    // a fucntion 
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "max90");
console.log(person);
// can access the property inside the class (access modifiers)
console.log(person.name, person.username);
// access private properties
person.printAge();
// person.setType("Cool Guy!"); // Won't work with private method
// inheritance
console.log("Inheritance");
var Ucok = /** @class */ (function (_super) {
    __extends(Ucok, _super);
    // name = "Ucok";
    function Ucok(username) {
        var _this = _super.call(this, "Ucok", username) || this;
        _this.age = 31;
        return _this;
    }
    return Ucok;
}(Person));
var ucok = new Ucok("ucok90");
console.log(ucok);
// getters & setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        // getter
        get: function () {
            return this._species;
        },
        // setter
        // the species name is use to refer to the
        // _species property yet it's not required to have the same
        // name for the setter & getter
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// static properties & methods
// static is meant to be access outise class
// without creating an object first
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
