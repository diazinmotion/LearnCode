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

	// explanation:
	// i => index
	// range name => is the length of slice name
	// element is variable for looping func
	for i, element := range name {
		fmt.Println(i, element)
	}

	fmt.Println(name)
}
