// objects
// TS automatically set type according to existing datatype
// of an objects
let userData = {
    name: "Dave",
    age: 25
};

// we can set it (types) explicitly
let userData2: { name: string, age: number } = {
    name: "Dave",
    age: 25
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 28, 3 ,22],

    output: function(all: boolean): number[] {
        return this.data;
    }
}
// complex();

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 28, 3 ,22],

    output: function(all: boolean): number[] {
        return this.data;
    }
}

// union types
// multiple 2 types or more for a variable
let myRealRealAge: number | string = "27";
myRealRealAge = 27;

// return an error (not number or string)
// myRealRealAge = true;

// check types during runtime
let finalValue = 32; // implicitly any datatype
if(typeof finalValue == "number"){
    console.log("Final value is a number!");
    
}
