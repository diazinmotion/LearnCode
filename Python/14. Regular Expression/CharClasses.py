##
#   CharClasses.py
#   Demonstrate character classes example
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-40-29
##

import re

# the group [] means that the search wil match any character that
# contain pattern inside the group bracket []
pattern_word = r"[aiueo]"
if re.search(pattern_word, "grey"):
    print("Match 1")

if re.search(pattern_word, "qwertyuiop"):
    print("Match 2")

if re.search(pattern_word, "rhythm myths"):
    print("Match 3")

# multiple pattern group
# means the pattern should contains any 2 uppercase followed by a number
pattern = r"[A-Z][A-Z][0-9]"

if re.search(pattern, "LS8"):
   print("Match 1")

if re.search(pattern, "E3"):
   print("Match 2")

if re.search(pattern, "1ab"):
   print("Match 3")

# invert a pattern group
# we use ^ inside a group bracket to invert it
# meaning that any string that contain any than then given char group
# would return a True value
# pattern any string that contain not all uppercase
pattern = r"[^A-Z]"

if re.search(pattern, "this is all quiet"):
   print("Match 1")

if re.search(pattern, "AbCdEfG123"):
   print("Match 2")

if re.search(pattern, "THISISALLSHOUTING"):
   print("Match 3")
