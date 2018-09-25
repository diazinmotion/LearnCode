##
#   IFElseComparison.py
#   Simple if else (conditions) with comparison example
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-15-25
##

# create a function
def max_number(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else:
        return num3

print(max_number(3, 4, 5))

# build a calculator
num1 = float(input("Enter first number: "))
op = input("Enter an operator: ")
num2 = float(input("Enter second number: "))

# process
if op == '+':
    print(num1 + num2)
elif op == '-':
    print(num1 - num2)
elif op == '*':
    print(num1 * num2)
elif op == '/':
    print(num1 / num2)
else:
    print("Invalid Operator")