##
#   Decorator.py
#   Implement decorator on python
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-34-28
##

# decorator
# basically like nested function (a function inside a function)
def decor(func):
    def wrap():
        print("================")
        func()
        print("================")
    return wrap


def print_text():
    print('Hello World!')


# decorator function
decorated = decor(print_text)
decorated()

# we can simplify the method above by using below lines
@decor
def print_text():
    print("Hello")

print_text()