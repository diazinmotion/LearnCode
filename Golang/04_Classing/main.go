package main

import (
	"fmt"
)

func main() {
	cards := deck{"Ace of Diamonds", "Five of Diamond"}

	for i, e := range cards {
		fmt.Println(i, e)
	}

	// run it with command:
	// go run main.go deck.go
}
