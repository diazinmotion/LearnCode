##
#   About.py
#   Explore more about python programming
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-20-03
##

# show the zen of python
import this

# according to PEP
# - modules should have short, all-lowercase names;
# - class names should be in the CapWords style;
# - most variables and function names should be lowercase_with_underscores;
# - constants (variables that never change value) should be CAPS_WITH_UNDERSCORES;
# - names that would clash with Python keywords (such as 'class' or 'if') should have a trailing underscore.

# function any numbers of parameters
# we use *args to state is as dynamic arguments
def test_function(named_args, *args):
    print(named_args)
    # will be treated as tuples
    print(args)

# call method
test_function(1, 2, 3, 4, 5)

# keywords arguments
# you should insert the name and value on its arguments
def test_function(named_args, *args, **kwargs):
    print(named_args)
    # will be treated as tuples
    print(args)
    # this will return dictionary format
    print(kwargs)

# call method
test_function(1, 2, 3, 4, 5, a=1, b=2)

# Tuples unpacking
# assign tuple value to some variables
name = (2, 3, 4)
a, b, c = name
print(a)
print(b)
print(c)

# *variable takes all the leftover
name = (1, 2, 3, 4, 5, 6, 7, 8, 9)
a, b, *c, d = name
print(a)
print(b)
# this will takes all the value on tuples that not assign to variable
print(c)
# this will takes the last one
print(d)

# if shorthand just like php
# $a = (a > 1)? 10 : 20
i = 2
number = 10 if i > 1 else 20
print(number)