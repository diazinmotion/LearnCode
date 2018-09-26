##
#   app.py
#   Main app for multiple choice quiz
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-05-25
##

from Questions import Questions

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

run_test(questions)

