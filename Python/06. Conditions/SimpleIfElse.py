##
#   SimpleIfElse.py
#   Simple if else (conditions) example
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-57-25
##

"""
    Condition:
    i wake up
    if i hungry
        i eat breakfast

    if it's weekday
        i'll go to work
        if it's cloudy
            i'll bring an umbrella
        otherwise
            i'll bring sunglasses
"""

# predefine condition
person_name = "John"
is_male = True
is_tall = False

# user identity
print("Hello " + person_name)
if is_male and is_tall:
    print("you're a male and tall")
elif is_male and not(is_tall):
    print("you're a male and short")
elif not(is_male) and is_tall:
    print("you're not a male and tall")
else:
    print("you're not a male and not tall")