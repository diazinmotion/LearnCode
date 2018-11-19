package main

import "fmt"

// global variable
var realName = "John"

func main() {
	// using var (string)
	// sometimes it's not mandatory to use the type
	var name = "Brad" // string
	var age = 37      // int
	var isCool = true // bool
	isCool = false
	var size float32 = 2.33

	// const
	const isBreaking = false
	// isBreaking = true // will throw error as it's a constant

	// shorthand of creating variable
	// but must be inside of the function
	shortName := "Mike"
	floatNum := 1.3

	// multi variable assignment
	shtName, shtEmail := "Anna", "anna@gmail.com"

	// normal print
	fmt.Println(name, age, realName)

	// %T means that we print the type of the variable
	fmt.Printf("%T\n", name)
	fmt.Printf("%T\n", age)
	fmt.Printf("%T\n", isCool)
	fmt.Println(shortName, floatNum, size)
	fmt.Println(shtName, shtEmail)
}
