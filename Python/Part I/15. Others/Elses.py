##
#   Elses.py
#   More about else
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-38-03
##

# we can combine while and else
# this will called upon abnormal break within for statement
for i in range(10):
    if i == 999:
        break
else:
    print("Unbroken 1")

for i in range(10):
    if i == 5:
        break
else:
    print("Unbroken 2")

# on try except too
try:
    print(1)
except ZeroDivisionError:
    print(2)
else:
    # this will called ONLY IF zero exception error not occurred
    print(3)

try:
    value = 1/0
except ZeroDivisionError:
    print(4)
else:
    print(5)