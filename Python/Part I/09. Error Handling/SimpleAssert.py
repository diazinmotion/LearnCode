##
#   SimpleAssert.py
#   Asserting conditions for test purposes
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-03-28
##

print("Start")
assert True == True
print("Middle")
assert 1 + 1 == 2
print("Finish")

# assert just like an if statement
current_temp = 10
# assert just print output if the condition does not meet the criteria
assert(current_temp >= 20), "It's cold enough!"
