package main

import (
	"io/ioutil"
)

func main() {
	strToSave := "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id facilisis velit. Nunc molestie, diam vel consequat lacinia, velit purus vestibulum sapien, eget molestie mi lectus sit amet diam."
	saveToFile("my_cards", strToSave)
}

func saveToFile(filename string, data string) error {
	// convert string to byte version
	byteFormat := []byte(data)

	// 0666 means the file permission in unix
	return ioutil.WriteFile(filename, byteFormat, 0666)
}
