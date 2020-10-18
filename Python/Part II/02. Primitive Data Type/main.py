# we have number data type
a = 10;
print(a, 'is', type(a))

b = 1.7
print(b, 'is', type(b))

c = 1+7j
print(c, ' is a complex type?', isinstance(c, complex))

# todo a conversion you can use this one
print(int(b), float(a), str(c))

# string
s = 'This is single line string'
print(s)

mls = """This is a multiline
string that can support multiple
lines.
"""
print(mls)

# boolean
bo = True
print(bo)