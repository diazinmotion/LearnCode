from counter import Counter

# object method caller
c = Counter(10)
print(c.simpleMethod(1, 1))

# class method can be called from obejct
print(c.sumOfNumbers(10, 20))

# class method can be called directly
print(Counter.sumOfNumbers(1, 2))

# static method can be called directly
a = Counter.multiplyOfNumbers(5, 5)
print(c.multiplyOfNumbers(2, 2))
print(a)