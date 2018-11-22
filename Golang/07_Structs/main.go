package main

import "fmt"

// new struct and the properties
type person struct {
	firstName string
	lastName  string
	contact   contactInfo
}

// 2nd struct
type contactInfo struct {
	email   string
	zipCode int
}

// struct is just like dictionary in python
func main() {
	// crate a variable from struct
	// Alex => firstName
	// Anderson => lastName
	// alex := person{"Alex", "Anderson"}

	// or we can use explicit way
	// LAST LINE MUST HAVE A COMMA EVEN IF ITS AT THE VERY END OF THE LINE
	alex := person{
		firstName: "Alex",
		lastName:  "Anderson",
		contact: contactInfo{
			email:   "alex@gmail.com",
			zipCode: 90222,
		},
	}
	fmt.Println(alex)

	// %+v will print all field and value from a struct
	fmt.Printf("%+v", alex)

	// updating a struct
	alex.firstName = "John"
	alex.lastName = "Swanson"
	fmt.Println(alex)

	// embedded a struct into a struct
	jim := person{
		firstName: "Jim",
		lastName:  "Party",
		contact: contactInfo{
			email:   "jim@gmail.com",
			zipCode: 94000,
		},
	}
}
