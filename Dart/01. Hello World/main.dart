
import 'dart:io';

void main() {
    // this is print into screen without add a new line
    stdout.write("1. Hello World!\n");

    // this is print into screen and add a new line
    print("2. Hello World");

    // we can use string interpolation too
    print("3. The result 3 + 3 is ${3+3}");
}