##
#   2DListNestedLoop.py
#   Demonstarate nested loop and multidementional list
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-13-25
##

# initialize variable
number_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]

print(number_grid[1][1])

for row in number_grid:
    for column in row:
        print(column)