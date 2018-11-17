// decorators
// we must attach constructor param as argument
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class PersonD {

}