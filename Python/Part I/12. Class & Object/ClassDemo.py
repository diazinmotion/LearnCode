##
#   ClassDemo.py
#   Demonstrate class and object on python
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-47-25
##

# import Student
from Student import Student

student1 = Student("Jim", "Business", 3.00, False)
student2 = Student("Lisa", "Art", 3.80, True)
print(student1.name)
print(student2.name)

print(student1.on_honor_roll())
print(student2.on_honor_roll())