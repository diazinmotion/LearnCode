console.log("This is an exercise on Chapter Classes");

// Exercise 1
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// solution (simple class)
class CarTS {
    name: string;
    acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }

    honk(): void{
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration = speed;
    }
}

let carts = new CarTS("BMW");
carts.honk();
console.log(carts.acceleration);
carts.accelerate(10);
console.log(carts.acceleration);


// Exercise 2
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

// solution (simple properties with inheritance)
class BaseObjectTS{
    width: number = 0;
    length: number = 0;
}

class RectangleTS extends BaseObjectTS {
    calcSize(): number {
        return this.width * this.length;
    }
}

let rectanglets = new RectangleTS();
rectanglets.width = 5;
rectanglets.length = 2;
console.log(rectanglets.calcSize());

// Exercise 3
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);

// solution (simple setter & getter)
class PersonTS {
    private _firstName: string = "";

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if(value.length > 3){
            this._firstName = value;
        }else{
            this._firstName = "";
        }
    }
}

let personts = new PersonTS();
console.log(personts.firstName);
personts.firstName = "Ma";
console.log(personts.firstName);
personts.firstName = "Maximilian";
console.log(personts.firstName);
