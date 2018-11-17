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

const person = new Person("Max", "max90");
console.log(person);
// can access the property inside the class (access modifiers)
console.log(person.name, person.username);

// access private properties
person.printAge();
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
