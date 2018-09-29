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