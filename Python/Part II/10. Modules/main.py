# here, we will demonstrate module and class
# first we need to import the file/class
import sys
# this will set our package location,
# IF ONLY the main.py not the same with our class
sys.path.insert(0, sys.path[0] + '/packages')

import hello

# then we can call it
hello.greeting()
print(hello.name)

# create an object of class
editor = hello.Editor('Jane Doe', 'Python Tutorial')
editor.editing()
