package main

func main() {
	// using 'deck' type
	cards := newCard()
	cards.print()

	// this will return 2 values
	// and assign it to each variable
	hand, remainingCards := deal(cards, 5)

	hand.print()
	remainingCards.print()

	// for people 'class'
	people := newPeopleGroup()
	people.print()

	// run it with command:
	// go run main.go deck.go people.go
}
