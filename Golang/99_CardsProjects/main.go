package main

func main() {
	// get new card
	cards := newDeck()
	// cardsInHand, remainingCards := deal(cards, 5)

	// save cards to file
	cards.saveToFile("my_game_card")

	// read the file
	cards2 := readTheFile("my_game_card")
	cards2.print()
}
