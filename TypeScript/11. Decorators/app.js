"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// decorators (ES7 feature)
// we must attach constructor param as argument
function logged(constructorFn) {
    console.log(constructorFn);
}
var PersonD = /** @class */ (function () {
    function PersonD() {
        console.log("Hi");
    }
    PersonD = __decorate([
        logged
    ], PersonD);
    return PersonD;
}());
// factory decorator
// this is not a decorator function
// this is only a factory method for a decorator function
function logging(val) {
    return val ? logged : null;
}
var CarD = /** @class */ (function () {
    function CarD() {
    }
    CarD = __decorate([
        logging(false)
    ], CarD);
    return CarD;
}());
// useful decorator (advanced)
function printable(constructorFn) {
    // constructorFn.prototype.print = function() {
    //     console.log(this);
    // }
    constructorFn.prototype.cetak = function () {
        console.log(this);
    };
}
// multiple decorator implementation
var PlantD = /** @class */ (function () {
    function PlantD() {
        this.name = "Green Plant";
    }
    PlantD = __decorate([
        logging(true),
        printable
    ], PlantD);
    return PlantD;
}());
var plantD = new PlantD();
plantD.cetak();
// method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// property decorator
function overwritable(val) {
    return function (target, propName) {
        var newDescriptor = {
            writable: val
        };
        return newDescriptor;
    };
}
var ProjectD = /** @class */ (function () {
    function ProjectD(name) {
        this.projectName = name;
    }
    ProjectD.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], ProjectD.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], ProjectD.prototype, "calcBudget", null);
    return ProjectD;
}());
var projectd = new ProjectD("Super Project");
projectd.calcBudget();
// object method overriden
// if we put decorator to a class method this 
// overriding not gonna work, since it's a read only
// stated by the decorator @editable(false)
// projectd.calcBudget = function() {
//     console.log(2000);
// }
projectd.calcBudget();
// param decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    // add decorator to a param
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
