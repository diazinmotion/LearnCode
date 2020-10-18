##
#   TryCatch.py
#   Demonstrate error handling on python
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-44-25
##

# try / catch -> try / except
try:
    # value = 10 /0 # force an error
    number = int(input("Enter a number: "))
    print(number)
except ZeroDivisionError as err:
    # print('Cannot be divided by 0')
    print(err)
except ValueError:
    print('Invalid input')