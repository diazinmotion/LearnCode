class Counter:

    startNumber = 0

    def __init__(self, startNumber):
        self.startNumber = startNumber


    # here we will try to demonstrate 
    # difference between method, class method and static method
    
    # simple method (self/first param is a must)
    def simpleMethod(self, number1, number2):
        return number1 + number2 + self.startNumber    

    # cls will be replace with this method
    @classmethod
    def sumOfNumbers(cls, number1, number2):
        return number1 + number2 + cls.startNumber

    # with static method you dont need to defind the first parameter
    @staticmethod
    def multiplyOfNumbers(number1, number2):
        return number1 * number2