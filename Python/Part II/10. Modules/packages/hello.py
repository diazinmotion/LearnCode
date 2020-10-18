# variable
name = 'John Doe'

# function
def greeting():
    print('Hello World')

# class
class Editor:
    # constructor
    def __init__(self, name, article):
        self.name = name
        self.article = article
    
    def editing(self):
        # self is like $this in PHP or this in dart
        print('{0} is responsible as editor of {1} contents.'.format(self.name, self.article))