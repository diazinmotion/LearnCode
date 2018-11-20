package main

import (
	"fmt"
)

func main() {
	// slice is dynamic size of an array (the type must be the same)
	// []string mean the array consist of strings
	name := []string{"John", "Mike", "George"}

	// append data to an array
	name = append(name, "Anna")

	// range syntax
	numbers := []int{1, 2, 3, 4, 5, 6}
	fmt.Println(numbers[2:4])
	fmt.Println(numbers[:3])
	fmt.Println(numbers[2:])

	// explanation:
	// i => index
	// range name => is the length of slice name
	// element is variable for looping func
	for i, element := range name {
		fmt.Println(i, element)
	}

	fmt.Println(name)
}
