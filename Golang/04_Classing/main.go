package main

import (
	"fmt"
)

func main() {
	// using 'deck' type
	cards := newCard()
	cards.print()

	// this will return 2 values
	// and assign it to each variable
	hand, remainingCards := deal(cards, 5)

	hand.print()
	remainingCards.print()

	cards2 := newCard()
	fmt.Println(cards2.toString())

	// for people 'class'
	// people := newPeopleGroup()
	// people.print()

	// run it with command:
	// go run main.go deck.go people.go
}
