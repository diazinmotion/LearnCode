##
#   SimpleFunction.py
#   Demonstrate how a function works
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-34-25
##

# declare a function
# Tip: function name should be on all lowercase
def simply_say_hi():
    print("Hello Users")

# function with paramater
def say_hi_to(user_name, age):
    print("Hello " + user_name + " you are " + str(age))


# call a function
print("Top")
simply_say_hi()
print("Bottom")

# call function with parameter
say_hi_to("George", 45)