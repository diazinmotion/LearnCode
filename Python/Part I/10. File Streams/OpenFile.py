##
#   OpenFile.py
#   Open and read a file
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-53-25
##

# open a file
employee_file = open("employee.txt", 'r')
if employee_file.readable():
    # print(employee_file.readlines()) # read output and treat it as array
    print(employee_file.readline())
    print(employee_file.read())
else:
    print("Cant output the file")

employee_file.close()