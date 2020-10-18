# OUTPUT
n = 10
name = 'John Doe'

print('Hello,', name, n)
# more direct approach
print('Hello, {0} you\'re queueing number {1}'.format(name, n))
# or a c++ style
print('Hello, %s. You\'re number %d!' % (name, n))

# join string from a lisy
s = ['Hello', 'Awesome', 'World']
print(' '.join(s))

# split string to list
sp = 'Hello,World,of,Awesomeness!'
print(sp.split(','))

# to replace specific text
sr = 'Hello World of Tanks'
print(sr.replace('Tanks', 'Code'))

# we can pad/add zero to number (like str_pad() but with zeroes)
zf = '5'
print(zf.zfill(4))

# centerize string
header = 'Welcome to Application'
print(header.center(40, '/'))

# we can output a list too, and it will be automatically
# converted
l = ['Coffee', 'Tea', 'Bread']
print('Your order %s' % l)


# INPUT
age = int(input('Enter your age: ')) # every user input is a string
print('Your age is {0}'.format(age))