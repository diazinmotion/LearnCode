let myName6 = "Max";
let myAge6 = 27;
let anything;

anything = 12;

// this even if it's error the compiler
// will still compile it to the js file
// if noEmitonError set to true
// myName6 = 22;

function controlMe(isTrue: boolean, somethingElse: boolean) {
    let result_cm: number;
    if(isTrue){
        result_cm = 12;
    }
    result_cm = 33;
    return result_cm;
}