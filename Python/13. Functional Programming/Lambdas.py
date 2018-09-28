##
#   Lambdas.py
#   Implementing lambdas or anonymous function
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-10-28
##

# lambdas vs named function
def polynomial(x):
    return x**2 + 5*x + 4


print(polynomial(10))

# anonymous function version (lambda)
print((lambda x:x**2 + 5*x + 4)(10))

# lambdas can be assigned to a normal variable just like a normal method
double = lambda x:x+x
print(double(10))

# lambda multi parameter
triple = lambda x, y: x + y
print(triple(double(10), 20))