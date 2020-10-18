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

# more like a C style outputting
print("My Name is {0}, i'm {1} years old and i'm a {2}".format(person_name, person_age, person_job))

# variable aliasing
print("My Name is {x}, i'm {y} years old and i'm a {z}".format(x = person_name, y = person_age, z = person_job))

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

# joining an array, just like php's implode
simple_array = ['eggs', 'pie', 'pizza']
print(", ".join(simple_array))

# splitting a string to an array
simple_string = "Hello World Python"
print(simple_string.split(" "))