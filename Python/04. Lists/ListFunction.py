##
#   ListFunction.py
#   Demonstrate List and Array Functions
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-13-25
##

# simple array
lucky_numbers = [9, 4, 3, 2, 6, 7, 9]

# printout list
print(lucky_numbers)

# merge list
lucky_words = ["run", "alpha", "bravo"]
lucky_numbers.extend(lucky_words)
print(lucky_numbers)

# append list
lucky_words.append("charlie")
print(lucky_words)

# insert to specify index position
lucky_words.insert(1, "Bon")
print(lucky_words)

# remove an element
lucky_words.remove("alpha")
print(lucky_words)

# remove entire elements
lucky_words.clear()
print(lucky_words)

# pop or remove last element from list
lucky_words = ["run", "alpha", "bravo"]
lucky_words.pop()
print(lucky_words)

