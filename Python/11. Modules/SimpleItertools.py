##
#   SimpleItertools.py
#   Show the function from itertools
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-17-28
##
from itertools import permutations, product

# permutation
letters = ['A', 'B', 'C']
# this is combination?
print(list(product(letters, range(3))))
# this is simple permutation
print(list(permutations(letters)))