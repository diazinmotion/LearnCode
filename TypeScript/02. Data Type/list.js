"use strict";
// array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0] + " -> " + typeof hobbies);
hobbies = [100];
// this will throw an error (not an array)
// hobbies = 100
// tuples
var address = ["Normal Street", 90];
// enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
// we can set custom number for enum
var CustomColor;
(function (CustomColor) {
    CustomColor[CustomColor["Red"] = 52] = "Red";
    CustomColor[CustomColor["Orange"] = 100] = "Orange";
    CustomColor[CustomColor["Yellow"] = 22] = "Yellow";
})(CustomColor || (CustomColor = {}));
var myColor = Color.Green;
console.log(myColor);
var myCustColor = CustomColor.Yellow;
console.log(myCustColor);
