##
#   Questions.py
#   Questions for multiple choice
#
#   @package    LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-06-25
##

class Questions:

    # construct
    def __init__(self, prompt, answer):
        self.prompt = prompt
        self.answer = answer


class Queue:
    # this is super private attribute
    __spam = "Eggs"

    def __init__(self, content):
        self._hiddenlist = list(content)

    def add_hidden_list(self, num):
        self._hiddenlist.insert(0,1)

    def pop_hidden_list(self):
        self._hiddenlist.pop()

    def print_spam(self):
        print(self.__spam);

    # output the hiddenlist
    def __repr__(self):
        return "Queue: ({})".format(self._hiddenlist)


# demo for class method
class Rectangle:

    def __init__(self, x, y):
        self.width = x
        self.height = y

    def calculate_area(self):
        return self.height * self.width

    # class method
    # a method that act like a separated class
    @classmethod
    def new_square(cls, side_length):
        # cls() is like we call new class initialization
        # in this case it's class(x, y)
        return cls(side_length, side_length)


# demo for static method
class Pizza:
    def __init__(self, toppings):
        self.toppings = toppings
        self._allowed_pineapple = False

    # static method
    # a method that act like normal method
    @staticmethod
    def validate_toppings(topping):
        if topping == 'pineapple':
            raise ValueError("No Pineapples!")
        else:
            return True

    # property getter & setter
    # property just like constant, we can't set it by default
    # we need to use setter and getter
    @property
    def pineapple_allowed(self):
        return self._allowed_pineapple


    # property setter
    @pineapple_allowed.setter
    def pineapple_allowed(self, value):
        if value:
            password = input("Input Password: ")
            if password == "password":
                self._allowed_pineapple = value
            else:
                raise ValueError("Not Allowed")