##
#   SimpleTranslator.py
#   Script for vowel translator / replacement
#
#   @package	LearCode
#   @author		Dimas Wicaksono
#   @since		2018-28-25
##

# method for translation
def translate(phrase):
    translation = ''

    for letter in phrase:
        if letter.lower() in "aiueo":
            if letter.isupper():
                translation += 'G'
            else:
                translation += 'g'
        else:
            translation += letter

    return translation


print(translate(input('Enter words: ')))