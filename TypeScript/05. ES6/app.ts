// let & const
let variable = "Test";
console.log(variable);

variable = "Another Value";
console.log(variable);

// const
const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // wont work

// block scope
function reset() {
    // even the same name, it's not the same variable
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// arrow function
console.log("Arrow Functions");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

// arrow function
// if we have one operation
// const multiplyNumbers = (number1: number, number2: number) => number1 * number2;

// if we have multiple operation
const multiplyNumbers = (number1: number, number2: number) => {
    return number1 * number2;
};
console.log(multiplyNumbers(9, 33));

// arrow function variation
// no parameters argument
const greet = () => {
    console.log("Hello");
}
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Dave");

// default param
console.log("Default Parameters");
const countDown = (start: number = 10): void => {
    console.log(start);
    while(start > 0){
        start--;
    }
    console.log("Done!", start);
}
countDown(20);

// Spread (...)
console.log("Rest & Spread");
const numbers6 = [1, 2, 3, 4, 5];
// Math.max accept param and not array
// with spread operator we can convert an array
// to a param format [1,2,3,4] => (1,2,3,4)
console.log(Math.max(...numbers6));

// Rest
// turn simple param (args) into an array
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max", 1, 2, 3));

// destructuring an array
console.log("Destructuring");
