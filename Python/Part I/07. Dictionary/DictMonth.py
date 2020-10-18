##
#   DictMonth.py
#   Use dictionary on script
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-37-25
##

# initialize a dictionary
# almost similar as JSON object
monthConversion = {
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",
}

# print month name conversion
# array style
print(monthConversion['Oct'])

# method style
print(monthConversion.get('Novv', "Not a valid Key"))