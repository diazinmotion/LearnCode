##
#   app.py
#   Main app for multiple choice quiz
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-05-25
##

from Questions import Questions, Queue, Rectangle, Pizza

# series of questions
questions_prompt = [
    "What color are apple?\n(a) Red/Green\n(b) Orange\n(c) Purple",
    "What color are banana?\n(a) Teal\n(b) Magenta\n(c) Yellow",
    "What color are strawberries?\n(a) Blue\n(b) Red\n(c) Silver"
]

questions = [
    Questions(questions_prompt[0], 'a'),
    Questions(questions_prompt[1], 'c'),
    Questions(questions_prompt[2], 'b')
]

# method to print all question
def run_test(question):
    score = 0
    for item in question:
        answer = input(item.prompt + "\n")
        if answer == item.answer:
            score += 1

    print("You got " + str(score) + "/" + str(len(question)) + " correct.")

# run_test(questions)

quest = Queue([0, 2, 3, 4])
print(quest)
quest.add_hidden_list(1)
print(quest)
quest.pop_hidden_list()
print(quest)
# directly access hiddenlist (private)
print(quest._hiddenlist)
quest.print_spam()
# this use to access super private data
print(quest._Queue__spam)

# class method
rectangle = Rectangle(4, 5)
print(rectangle.calculate_area())

# call class method
square = Rectangle.new_square(5)
print(square.calculate_area())

# static method
# call static method
# we can call static method without initialize the class instance first
# they usually not affect the main class attributes
toppings = ['spam', 'cheese', 'onion']
if all(Pizza.validate_toppings(i) for i in toppings):
    pizza = Pizza(toppings)

# demo of setter / getter property
pizza = Pizza(["cheese", "tomato"])
# access property
print(pizza.pineapple_allowed)

# change the property value
pizza.pineapple_allowed = True
print(pizza.pineapple_allowed)