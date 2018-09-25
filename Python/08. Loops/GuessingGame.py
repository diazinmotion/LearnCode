##
#   GuessingGame.py
#   Use looping to a guessing game
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-53-25
##

# variable
secret_word = "elephant"
guess = None
attempt = 0
max_attempt = 3
out_of_attempt = False

# looping user input until correct
while guess != secret_word:
    if guess != None:
        print("Oops, wrong...")
        attempt += 1

    if attempt < max_attempt:
        guess = input("Enter your guess: ")
    else:
        # exit loop
        out_of_attempt = True
        break

if not out_of_attempt:
    print("You WIN :D")
else:
    print("You LOSE :(")

