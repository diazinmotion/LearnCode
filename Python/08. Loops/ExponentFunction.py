##
#   SimpleExponent.py
#   Simple exponent function based on loop
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-43-25
##

# make a simple exponent method of 2 parameter
def raise_to_power(num, pow_num):
    result = 1
    for index in range(pow_num):
        result *= num

    return result

print(raise_to_power(2, 6))