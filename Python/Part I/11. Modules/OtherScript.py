##
#   OtherScript.py
#   Simple file to demonstrate modules and pip on python
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-23-25
##

import random

feet_in_mile = 5280
meters_in_kilometer = 1000
name = ["Joan", "Eric", "Bastian", "Leo"]

def get_file_extension(filename):
    return filename[filename.index('.') + 1:]

def roll_dice(num):
    return random.randint(1, num)