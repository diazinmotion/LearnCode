##
#   SimpleRE.py
#   Simple regular expression
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-09-29
##

import re

# check whether a word similar in a given words
# we use raw string
pattern_word = r"spam"

if re.match(pattern_word, "spameggs"):
    print("Match!")
else:
    print("Not Match!")

# search pattern word in given strings
if re.search(pattern_word, "spamspamspam"):
    print("Match!")
else:
    print("Not Match!")

# search pattern word in given strings and return a list
print(re.findall(pattern_word, "eggspamsausagespam"))

# regex operation
pattern_word = r"pam"
match = re.search(pattern_word, "eggspamsausage")
if match:
    # return the exact match word
    print(match.group())
    # return the first index of match word on given string
    print(match.start())
    # return the last index of match word on given string
    print(match.end())
    # return the start and end index of match word on given string
    print(match.span())

# we can use regex to substitute any match pattern word on the string
pattern_word = r"David"
string = "Hello David. Good Morning David"
print(re.sub(pattern_word, "Amy", string))