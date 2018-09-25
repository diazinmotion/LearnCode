##
#   UserInput.py
#   Demonstrate user input interaction
#
#   @package    LearnCode
#   @author     Dimas Wicaksono
#   @since      2018-45-24
##

# get user input
user_name   = input("Enter your name: ")
user_age    = input("Enter your age: ")
print("Hello, "+ user_name)
print("You're "+ user_age + " years old.")

# simple calculation
num1    = input("Enter a number: ")
num2    = input("Enter another number: ")

# convert string to integer
result  = int(num1) + int(num2)
print(result)