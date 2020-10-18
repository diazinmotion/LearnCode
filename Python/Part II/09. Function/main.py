# this example is meant to show how to use function
# we can use precise arguments position on function
# like this one
def greetPerson(name):
    print('Hello {0}'.format(name))

def calcNumber(number1, number2):
    return number1 + number2

# named parameter / keyword argument
def studentBio(name, age, isMale = True):
    print('This is {0}, {1} is a {2} years old'.format(name, ('he' if isMale == True else 'she'), age))
    return None

# using *args or **kwargs for unlimited numbers of params/args
def showArguments(*args, **kwargs):
    for i in args:
        print('This is standard argument {0}'.format(i))
    
    for k, v in kwargs.items():
        print('This is named/keyword argument {0} -> {1}'.format(k, v))

    return None

# another example
def uploadFile(**kwargs):
    config = {}
    correctValue = ['size', 'type', 'path', 'overwrite']
    
    for k,v in kwargs.items():
        # only append correct config keyword
        if k in correctValue:
            config[k] = v

    return config

# we place this here, because this app
# run it procedurally
greetPerson('John Doe')
print('Sum of 1 + 1 is {0}'.format(calcNumber(1,1)))

# keyword arguments
studentBio(age=25, name="Jane Doe", isMale=False)

# args vs keyword arguments
showArguments('John Doe', 21, 'Male')
showArguments(name = 'John Doe', age = 21, gender = 'Male')

# kwargs
config = uploadFile(test=False, size=5.0, type='jpg|png|bmp', overwrite=True, path='/var/www/html/uploads')
print(config)

# anonymous function or closure
# similarly with dart or js, we can assign anonymous function to variable
mySum = lambda args1, args2: args1 + args2
print('Anonymous func {0}'.format(mySum(10,20)))