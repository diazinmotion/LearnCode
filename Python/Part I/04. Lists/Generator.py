##
#   Generator.py
#   Implement generator on script
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-13-28
##

# Generator
# almost similar as list or tuples but, we can't add index to the generated list
# it also can make a method acted as list

# simple generator
def only_even(x):
    index = 0
    while index < x:
        yield index
        index += 1


for i in only_even(100):
    print(i)

# we can also convert generator to a list
print(list(only_even(100)))