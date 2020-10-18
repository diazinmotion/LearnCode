# we can also take parameter from system CLI

import sys

print('Arguments number: ', len(sys.argv))
print('List of arguments: ', str(sys.argv))
print('First args is', sys.argv[0])

# to test this feature, run with this command: python command.py hello world