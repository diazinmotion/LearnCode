##
#   AsObject.py
#   Function as an object
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-33-28
##


# simple function
def multiply_num(x, y):
    return x * y


# set method as object
operation = multiply_num
print(operation(10, 5))


# function as an argument
def add_num(x, y):
    return x + y


# we use method as parameter for repeating function
def main_operation(func, x, y):
    return func(func(x, y), func(x, y))


# variable
a = 5
b = 10

print(main_operation(add_num, a, b))

