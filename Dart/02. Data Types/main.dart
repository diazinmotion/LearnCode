// this is to import package or other needed class
import 'dart:io';
import 'dart:math';

void main() {
    // we can defind data type of a variable by using var or explicitly of
    // they're intending to be. This example is for primitive data type

    // compiler detection
    var nationality = null;
    nationality = 'United States';
    print(nationality);

    // string 
    String fullName = "John Doe";
    print(fullName);

    // integer
    int personHeight = 178;
    print('$fullName height is $personHeight cm');

    // for decimal
    double personWeight = 76.77;
    print('$fullName weight is $personWeight kg');

    // we can also parse decimal to integer
    print('$fullName weight is ${personWeight.toInt()} kg');

    // generally we can set int or double as num
    num decimalNumber = 88.78888;
    num humanAge = 80;
    print('$decimalNumber $humanAge');

    // boolean
    bool isMale = true;
    bool isInVacation = false;
    print('You are a ${(isMale) ? 'Male' : 'Female'} and you\'re ${(isInVacation) ? 'in vacation' : 'not in vacation'}');

    // for immutable types
    // we can use const (immutable since beginning) or final can be initialized then 
    // cannot be assigned anymore
    const pi = 3.14;
    stdout.write('Radius (cm): ');

    final radius = num.parse(stdin.readLineSync());
    print('Area of circle is ${pi * pow(radius, 2)} cm2');
}