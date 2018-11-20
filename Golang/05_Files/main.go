package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	// save a file
	strToSave := "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id facilisis velit. Nunc molestie, diam vel consequat lacinia, velit purus vestibulum sapien, eget molestie mi lectus sit amet diam."
	saveToFile("myfile", strToSave)

	// read a file
	content := readAFile("mayfile")
	fmt.Println(content)
}

// save a file function
func saveToFile(filename string, data string) error {
	// convert string to byte version
	byteFormat := []byte(data)

	// 0666 means the file permission in unix
	return ioutil.WriteFile(filename, byteFormat, 0666)
}

// read a file function
func readAFile(filename string) string {
	// go style try catch
	bs, err := ioutil.ReadFile(filename)
	if err != nil {
		// if file reading return an error
		// log the error
		fmt.Println("Error:", err)

		// exit the program
		os.Exit(1)
	}

	return string(bs)
}
