# this example will demonstrate how to
# handle program errors

# the most common error handling on programming language
# is a try/catch block
number = 100

try:
    value = int(input('Please input a number: '))
    print('Result:', number / value)
except (TypeError, ValueError):
    print('Error: Please input a valid number ')
except ZeroDivisionError:
    # if a specific error occured
    print('Error: Cannot divided with zero.')
else:
    # if any errors not occured
    print('Status: Correct Number')
finally:
    print('Done.')
