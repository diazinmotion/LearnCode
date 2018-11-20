package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

type deck []string

// generate new cards
func newDeck() deck {
	cards := deck{}
	cardsSuit := []string{"Hearts", "Spades", "Diamond", "Club"}
	cardsValue := []string{"Ace", "Two", "Three", "Four"}

	// generate deck from available cards combination
	for _, suit := range cardsSuit {
		for _, val := range cardsValue {
			cards = append(cards, val+" of "+suit)
		}
	}
	return cards
}

// receiver for printing
func (d deck) print() {
	for i, element := range d {
		fmt.Println(i, element)
	}
}

// get cards from the deck
func deal(d deck, handOfSize int) (deck, deck) {
	// return number of card in the hand
	// and the remaining in the deck
	return d[handOfSize:], d[:handOfSize]
}

// receiver convert deck type to plain string
func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

// receiver to save to a file
func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0755)
}

// receiver to read a file
func readTheFile(filename string) deck {
	bs, err := ioutil.ReadFile(filename)
	if err != nil {
		// if error, return error & exit program
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// convert it to normal string from byte
	s := strings.Split(string(bs), ",")
	return deck(s)
}
