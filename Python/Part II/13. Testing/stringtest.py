import unittest

class TestStringMethod(unittest.TestCase):
    
    def testStrip(self):
        self.assertEqual('HelloWorld1000'.strip('10'), 'HelloWorld')

    def testIsAlnum(self):
        self.assertTrue('pyth0n'.isalnum())
        self.assertFalse('pyth@n'.isalnum())


if __name__ == '__main__':
    unittest.main()