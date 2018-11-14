// array
let hobbies: any[] = ["Cooking", "Sports"];
console.log(hobbies[0] + " -> " + typeof hobbies);
hobbies = [100];

// this will throw an error (not an array)
// hobbies = 100

// tuples
let address: [string, number] = ["Normal Street", 90];

// enum
enum Color {
    Grey, // 0
    Green, // 1
    Blue // 2
}

// we can set custom number for enum
enum CustomColor {
    Red = 52,
    Orange = 100,
    Yellow = 22
}

let myColor: Color = Color.Green;
console.log(myColor);

let myCustColor = CustomColor.Yellow;
console.log(myCustColor);