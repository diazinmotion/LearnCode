##
#   RunningScript.py
#   Demonstarate script that run like normal or modules
#
#   @package	LearnCode
#   @author		Dimas Wicaksono
#   @since		2018-47-03
##

# this method available if this script is imported
def test_method():
    print("I'm a module!")


# this will execute as normal script
if __name__ == "__main__":
    print("This is script")

# Packages
# to create a packages we must include a file caleed __init__.py
# even if the script is blank
# we also should create setup.py that cointains:
# from distutils.core import setup
#
# setup(
#    name='SoloLearn',
#    version='0.1dev',
#    packages=['sololearn',],
#    license='MIT',
#    long_description=open('README.txt').read(),
# )

# so it would be valid for PyPI