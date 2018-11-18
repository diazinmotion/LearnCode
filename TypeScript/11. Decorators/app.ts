// decorators (ES7 feature)
// we must attach constructor param as argument
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class PersonD {
    constructor() {
        console.log("Hi");
    }
}

// factory decorator
// this is not a decorator function
// this is only a factory method for a decorator function
function logging(val: boolean) {
    return val ? logged : null;    
}

@logging(false)
class CarD {}

// useful decorator (advanced)
function printable(constructorFn: Function) {
    // constructorFn.prototype.print = function() {
    //     console.log(this);
    // }
    constructorFn.prototype.cetak = function() {
        console.log(this);
    }
}

// multiple decorator implementation
@logging(true)
@printable
class PlantD {
    name = "Green Plant";
}
const plantD = new PlantD();
(<any>plantD).cetak();

// method decorator
function editable(value:boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}

// property decorator
function overwritable(val: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: val
        };
        return newDescriptor;
    }
}

class ProjectD {
    @overwritable(true)
    projectName: string;

    constructor(name: string){
        this.projectName = name;
    }

    @editable(false)
    calcBudget(){
        console.log(1000);
    }
}

const projectd = new ProjectD("Super Project");
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
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    // add decorator to a param
    printStudentNumbers(mode: string, @printInfo printAll: boolean){
        if(printAll){
            console.log(10000);
        }else{
            console.log(2000);
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);