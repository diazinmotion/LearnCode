##
#   MapFilter.py
#   Implemet map and filter on list
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-56-28
##

# simple map
# map is used like array_map on php
# we can use a method to manipulate items in array

# named function
def add_three(x):
    return x + 3


numbers = [9, 0, 2, 7, 4, 3]
print(list(map(add_three, numbers)))

# lambdas (anonymous function)
print(list(map((lambda x: x + 3), numbers)))

# filter
# filter is used to output any values that match with given criteria
# the method should return boolean value

# named function
def is_even(x):
    if x % 2 == 0:
        return True
    else:
        return False


# named function
print(list(filter(is_even, numbers)))

# lambdas function
print(list(filter((lambda x: x % 2 == 0), numbers)))