##
#   Comprehensions.py
#   Implement list comprehensions
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-40-28
##

# list
# index var <space> for statement
simple_list = [i*2 for i in range(8)]
print(simple_list)

# combine with if statement
simple_list = [i*2 for i in range(8) if i%2 == 0]
print(simple_list)