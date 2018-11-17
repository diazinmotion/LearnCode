// interfaces
// are a way to make sure that the propery
// or method or anything are available
interface NamedPerson {
    firstName: string;
    age?: number; // ? means optional
    [propName: string]: any; // we use this if we dont know the key's name yet
    greet(lastName: string): void
}

function greetIn(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Max",
    gender: "Male",
    greet(lastName: string){
        console.log("Hi, " + this.firstName + " " + lastName);
    }
};

// greetIn({firstName: "Max", age: 27});
changeName(person);
greetIn(person);
person.greet("Anything");

// implement interfaces on class
class PersonIn implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string){
        console.log("Hi, " + this.firstName + " " + lastName);        
    }
}

const myPerson = new PersonIn();
myPerson.firstName = "Maxmilion";
myPerson.lastName = "Anything";
greetIn(myPerson);
myPerson.greet("Holande");


// fucntion types
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(val1: number, val2: number){
    return (val1 + val2) * 2;
}
console.log(myDoubleFunction(10, 20));

// interface inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}
const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string){
        console.log("Hello");   
    }
}
console.log(oldPerson);
