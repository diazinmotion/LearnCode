##
#   ForLoop.py
#   For loop inside a script
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-05-25
##

# similar like foreach in php
for letter in "Giraffe Academy":
    print(letter)

# more like a foreach
friends = ["Jim", "Lisa", "John", "Matthew"]
for name in friends:
    print(name)

# range() create an array from zero to before indicated number
for index in range(len(friends)):
    print(index)
