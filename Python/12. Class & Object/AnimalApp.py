##
#   AnimalApp.py
#   Main app for animals superclass and subclass
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-18-29
##

from Animals import Cat
from Animals import Dog

# for cat class
cat = Cat("Steve", "Brown")
print(cat.name)
print(cat.color)
cat.change_color("Black")
print(cat.color)
cat.purr()

# for dog class
dog = Dog("Rex", "Black")
print(dog.name)
print(dog.color)
dog.change_color("Red")
print(dog.color)
dog.bark()