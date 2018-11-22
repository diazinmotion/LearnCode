package main

import (
	"testing"
)

// test on Go must include _test on the file name
// and run it with go test
func TestNewDeck(t *testing.T) {
	d := newCard()

	if len(d) != 16 {
		// something is wrong
		t.Errorf("Expected deck of 16, but got %v", len(d))
	}

	// check whether the first card is ace of spades
	if d[0] != "Ace of Spades" {
		t.Errorf("Expected Ace of Spades, but got %v", d[0])
	}

	// last card test
	if d[len(d)-1] != "Four of Clubs" {
		t.Errorf("Expected Four of Clubs, but got %v", d[len(d)-1])
	}
}
