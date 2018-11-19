package main

import (
	"fmt"
)

func main() {
	// var card string
	// var card string = "Ace of Spades"
	card := newCard()

	// assignment to existing variable
	// card = "Five of Diamonds"

	fmt.Println(card)
}

// the string is the data type it's sexpected
// from this function, just like typescript or PHP7
func newCard() string {
	return "Five of Diamonds"
}
