package main

import (
	"fmt"
	"strconv"
)

type people []string

// new function to create a list of person
func newPeopleGroup() people {
	pepGroup := people{}

	groupAge := []int{25, 26, 27, 28}
	groupName := []string{"Mike", "James", "Dave", "Rick"}

	for _, age := range groupAge {
		for _, name := range groupName {
			pepGroup = append(pepGroup, strconv.Itoa(age)+" years old of "+name)
		}
	}
	return pepGroup
}

// receiver for person
func (p people) print() {
	for i, person := range p {
		fmt.Println(i, person)
	}
}
