##
#   SimpleTuple.py
#   Demonstrate tuple as list
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-28-25
##

# simple tuple (2 series data member)
# you cant change tuple after already initialized
coordinate = (4, 6)
# coordinate[0] = 7 'tuple' object does not support item assignment error
print(coordinate[0])

# series / array of tuples
coordinate2 = [(4, 5), (6, 2), (3, 9)]
print(coordinate2)
print(coordinate2[1])