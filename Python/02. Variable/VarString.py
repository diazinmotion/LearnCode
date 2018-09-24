##
#   VarString.py
#   Demonstrate how to use simple string variable
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-26-24
##

# Person details
person_name = "Elton"
person_age  = "57"
person_job  = "Singer"

# Show text
# normal string outputting
print("My name is "+ person_name +" and i'm "+ person_age +" years old.")

# outputting directly within string
print(f"My job is {person_job}")

# String Formatting
print(f"\nName: {person_name.upper()}")
print(f"Job: {person_job.lower()}")

# String Array
phrase = "Giraffe Academy"

print(f"Letter on index 0 is: {phrase[0]}")
print(f"Letter G is in index: {phrase.index('G')}")
print(f"Word Index: {phrase.index('Acad')}")

# Text Replace
print(phrase.replace("Giraffe", "Elephant"))