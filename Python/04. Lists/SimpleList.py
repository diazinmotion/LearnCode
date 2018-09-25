##
#   SimpleList.py
#   Demonstrate List and Array
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-04-25
##

# friends list / array
friends = ["Kevin", "John", "Anthony", "Joe", "Tommy"]
print(friends)
print(friends[0])
print(friends[1])

# use negative index to get array member from back
print(friends[-1])
print(friends[-2])

# grab member from specify index and following data
print(friends[1:])

# grab member index range
# this will grab array member until before the last index range (2)
print(friends[1:2])

# modify array
friends[0] = "Kino"
print(friends)
