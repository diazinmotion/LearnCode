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
student2 = Student("Lisa", "Art", 2.75, True)
print(student1.name)
print(student2.name)