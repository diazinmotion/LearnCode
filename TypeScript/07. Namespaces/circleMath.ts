namespace MyMath {
    const PI = 3.14;

    // export mean we can use this method outside
    // of the namespace
    export function calcCircumference(diameter: number){
        return diameter * PI;
    }
}