package main

func main() {
	// get new card
	cards := newDeck()
	// cardsInHand, remainingCards := deal(cards, 5)

	// cardsInHand.print()
	// remainingCards.print()

	// strCards := cards.toString()
	cards.saveToFile("my_game_card")
}
