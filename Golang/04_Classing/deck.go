package main

import "fmt"

// instead of traditional OOP, Go has different
// approach for classing which is creating a type
// with all of methods of that type

// new type (deck) like extending of
// slice/array of string []string
type deck []string

func newCard() deck {
	cards := deck{}

	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}

	// similar like python we use underscore (_)
	// to use variable inside a for and not using it
	for _, suit := range cardSuits {
		for _, val := range cardValues {
			cards = append(cards, val+" of "+suit)
		}
	}

	return cards
}

// this is a receiver
// d deck -> the deck type variable only deck type can call this method
// d deck similar as 'this' or 'self' in other language
// print() name of method
func (d deck) print() {
	for i, e := range d {
		fmt.Println(i, e)
	}
}
