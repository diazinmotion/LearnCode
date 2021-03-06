// classes
class Person {
    // property (attribute)
    name: string;
    private type: string;
    protected age: number = 27;

    // constructor
    // public username means we tell TS to create a username property
    // and assign it directly (if not null) to that property
    constructor(name: string, public username: string) {
        // this.name refers to the property
        this.name = name;
    }

    // a fucntion 
    printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const personmod = new Person("Max", "max90");
console.log(personmod);
// can access the property inside the class (access modifiers)
console.log(personmod.name, personmod.username);

// access private properties
personmod.printAge();
// person.setType("Cool Guy!"); // Won't work with private method

// inheritance
console.log("Inheritance");

class Ucok extends Person {
    // name = "Ucok";

    constructor(username: string) {
        super("Ucok", username);
        this.age = 31;
    }
}
const ucok = new Ucok("ucok90");
console.log(ucok);

// getters & setters
class Plant {
    private _species: string = "Default";

    // setter
    // the species name is use to refer to the
    // _species property yet it's not required to have the same
    // name for the setter & getter
    set species(value: string){
        if (value.length > 3){
            this._species = value;
        }else{
            this._species = "Default";
        }
    }

    // getter
    get species(){
        return this._species;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// static properties & methods
// static is meant to be access outise class
// without creating an object first
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// abstract class
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget;
    }
}

// normal class
class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}
let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// private constructor (TSv2)
// singleton pattern
// singleton is a pattern that only allow single instance
// throughout the app lifecycle
class OnlyOne {
    private static instance: OnlyOne;

    // we made it private so, outer access cant initiate this class
    // private constructor(public name: string) {}

    // readonly properties
    private constructor(public readonly name: string) {}

    static getInstance(){
        // if we dont have the instance yet, lets create it.
        if(! OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        // if already had, just return the existing instance.
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("The Only One"); // wrong because we cant create any other instance
let rigth = OnlyOne.getInstance();
console.log(rigth.name);

// if the property is reaonly then this will be error.
// rigth.name = "Something Else";
