##
#   TryExceptFinally.py
#   Error handling with finally and raise
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-24-28
##

# divided by zero

try:
    value = 10 / 0
except ZeroDivisionError:
    print("Cant divided by zero")
    # raise to print the default error message
finally:
    print("This will be printed whatever happens")

# just like throw new Exception() on php
raise ValueError