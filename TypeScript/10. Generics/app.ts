// simple Generics
function echo(data: any) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

// the better way for generic function
// <T> just like in C# and Java
// for function, instead of any type we better use generic type
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Max", age: 27}));

// built-in generics
const testResults2: Array<number> = [1.94, 2.33];
testResults2.push(-2.99);
// testResults.push("Anna"); // will error because of type mismatch

// arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(['Apple', 'Orange', 'Banana']);

// generic types (ES6)
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

// generic class
// we can extends T to specify existing type
// number | string means generic with constraint
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        // return this.baseValue * this.multiplyValue;
        // we should change it to this:
        // because typescript detect that whenever our class type is string
        // this mehtod wont be funct.
        // we add plus (+) to set this as number
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "20";
simpleMath.multiplyValue = "10";
console.log(simpleMath.calculate());
