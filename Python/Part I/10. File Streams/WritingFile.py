##
#   WritingFile.py
#   Write information to an existing file
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-13-25
##

# append to a file
# employee_file = open("employee.txt", 'a')
employee_file = open("employee1.txt", 'w') # write a new file
employee_file.write("\nKelly - Customer Service")
employee_file.close()