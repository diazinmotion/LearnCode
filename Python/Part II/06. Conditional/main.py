# this is a simple if/else condition
a = 100
if a > 10:
    print('You hava many number {0}'.format(a))

# for a simple if (without else) you can use a single line conditional
if a > 10 : print('Awesome')

# this is if/else
if a % 2 == 0:
    print('{0} is Even'.format(a))
else:
    print('{0} is Odd'.format(a))

# sadly python doesn't have switch case, alternatively 
# we can use elif or ELSE IF
b = 70
if b == 100:
    print('Awesome')
elif b == 90:
    print('Very Good')
elif b == 80:
    print('Good')
elif b == 70:
    print('Not Bad')
else:
    print('Try Again!')

# ternary operator for simple if/else
c = 'Nicely done.' if a > 10 else 'Try Again'
print(c)