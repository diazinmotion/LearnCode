##
#   MetaChars.py
#   Demonstratte metachacracters regex
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-29-29
##

import re

# this will match any letter inside the dot (wildcard)
# this is case sensitive
pattern_exp = r"gr.y"

if re.match(pattern_exp, "gray"):
    print("Match 1")

if re.match(pattern_exp, "grey"):
    print("Match 2")

if re.match(pattern_exp, "blue"):
    print("Match 3")

# The next two metacharacters are ^ and $.
# These match the start and end of a string, respectively.
# from: sololearn.com
pattern_exp = r"^gr.y$"
if re.match(pattern_exp, "grey"):
   print("Match 1")

if re.match(pattern_exp, "gray"):
   print("Match 2")

# would not match because the start of the word is not gr
# the start of this word is: 'stin'
if re.match(pattern_exp, "stingray"):
   print("Match 3")

# advanced metachars
# we use * to match the repeating previous word, string or anything inside the parenthesis
# The metacharacter * means "zero or more repetitions of the previous thing".
# pattern: match string that contain egg at the beginning and any repeating spam word
pattern = r"egg(spam)*"

if re.match(pattern, "egg"):
   print("Match 1")

if re.match(pattern, "eggspamspamegg"):
   print("Match 2")

# not started with egg word
if re.match(pattern, "spam"):
   print("Match 3")

# the + means one or more repetitions
pattern = r"g+"

if re.match(pattern, "g"):
   print("Match 1")

if re.match(pattern, "gggggggggggggg"):
   print("Match 2")

# not contain any g letter
if re.match(pattern, "abc"):
   print("Match 3")

# the ? mean zero or only on repetition
pattern = r"ice(-)?cream"
# TRUE: contain none or one - symbols
if re.match(pattern, "ice-cream"):
   print("Match 1")
# TRUE: contain NONE of - symbols
if re.match(pattern, "icecream"):
   print("Match 2")
# FALSE: not contain any ice cream word
if re.match(pattern, "sausages"):
   print("Match 3")
# FALSE: contain MORE THAN ONE - symbols
if re.match(pattern, "ice--ice"):
   print("Match 4")

# the {x, y} means how many repetition should be occur
# if is x empty it would set as 0, if y is empty it would be set to infinity repetition
# {0,1} similar to ? metachar
# pattern: the 9 number should be repeated 1 to 3 only less or more than that return false
pattern = r"9{1,3}$"

# TRUE: there is one 9 (min allowed repetition)
if re.match(pattern, "9"):
   print("Match 1")

# TRUE: there are three 9 (max allowed repetition)
if re.match(pattern, "999"):
   print("Match 2")

# FALSE: more than allowed repetition (3) this contain 4
if re.match(pattern, "9999"):
   print("Match 3")


# Regex group that should match the pattern
# pattern: the placement of bc on string should match the position from pattern
pattern = r"a(bc)(de)(f(g)h)i"

match = re.match(pattern, "abcdefghijklmnop")
if match:
   # should match only inside pattern string "abcdefghi"
   print(match.group())
   # similar as group()
   print(match.group(0))
   # this return the first occurance group, in this case it's (bc)
   print(match.group(1))
   # this return the second occurance group, in this case it's (de)
   print(match.group(2))
   # this return the third occurance group, in this case it's (g)
   print(match.group(3))
   # this return all group inside the given pattern
   print(match.groups())

# regex named group
# pattern: ?P<first> is metachar used to indicated that it's a named group
# first is the name of the group, abc is the pattern to match
# ?: is used to skip a group (non capturing group). def is the pattern to ignore
pattern = r"(?P<first>abc)(?:def)(ghi)"

match = re.match(pattern, "abcdefghi")
if match:
   # return the match with group named first "abc"
   print(match.group("first"))
   # return all occurance with all group except non-capturing group
   # abc, ghi
   print(match.groups())

# or metachar |
# pattern: means the word gr*y can either contain a or e on the *
pattern = r"gr(a|e)y"

# TRUE: because gray <- a or e
match = re.match(pattern, "gray")
if match:
   print ("Match 1")

# TRUE: because gray <- a or e
match = re.match(pattern, "grey")
if match:
   print ("Match 2")

# FALSE: because not griy is not match with either a/e
match = re.match(pattern, "griy")
if match:
    print ("Match 3")