##
#   Animals.py
#   Simple animals class with all its subclass
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-15-29
##

class Animals:
    # constructor
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def change_color(self, color):
        print("Change animal color to {0}".format(color))
        self.color = color


class Dog(Animals):
    def modify_color(self, color):
        # super() refers to this class's superclass
        super().change_color(color)

    def bark(self):
        print("Woof!")


class Cat(Animals):
    def modify_color(self, color):
        # super() refers to this class's superclass
        super().change_color(color)

    def purr(self):
        print("Purr...")