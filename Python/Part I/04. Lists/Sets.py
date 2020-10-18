##
#   Sets.py
#   Show the broad type of lists
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-06-28
##

# sets is similar as list and dictionary
# the difference: set is not indexed (so it's unordered) and cant contain
# any duplicate data

number = {1, 2, 3, 1, 4, 2, 3, 5}
print(number)

# we can use list operation too
number.add(-7)
number.remove(1)
print(number)

# sets operations
# from: www.sololearn.com
# The union operator | combines two sets to form a new one containing items in either.
# The intersection operator & gets items only in both.
# The difference operator - gets items in the first set but not in the second.
# The symmetric difference operator ^ gets items in either set, but not both.
number1 = {1, 4, 2, 3, 5}
number2 = {2, 3, 4, 6, 7, 8}
print(number1 | number2)
print(number1 & number2)
print(number1 - number2)
print(number2 - number1)
print(number1 ^ number2)