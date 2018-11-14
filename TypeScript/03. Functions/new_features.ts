// never type (TSv2.0)
// a type that never return anything
// not really like void
function neverReturns(): never {
    throw new Error('An Error');
}

// nullable type (TSv2.0)
// a variable that can accept a null value
// can be useful if we can to prevent our code to take a null value
// on specific variable
let canBeNull: number | null = 12;
canBeNull = null;

// since canAlsoBeNull is undefined by default
// it wont throw an error
let canAlsoBeNull;
canAlsoBeNull = null;

let canThisBeAny = null;
canThisBeAny = 12;