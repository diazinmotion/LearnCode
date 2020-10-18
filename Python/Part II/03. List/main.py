# this example will demonstrate list on python
# SIMPLE ARRAY
a = [1,2,3,4,5]
print(a)

# get specific element
print(a[1])

# get specific range of element
print(a[1:3])

# we can also insert anykind of type to this
# array list so it's really flexible
b = ['Hello', 1, True, 'Last']
print(b)
# if you need to get the last element
print(b[-1])

# we can also set value to specific index
a[1] = 10
print(a)

# to add/insert to a list
a.append(100)
print(a)

# just like js if you want to delete the element on list
del a[1]
print(a)

# TUPLE
# tuple is like a list with immutable elements
t = (1, 'Anything', True)
print(t)
# we can get the element, but not to change it
print(t[1])
print(t[-1])

# SET
# this is like a dart set, where you can
# store unique value to list (ordered)
s = {1,1,3,4,2,2,2}
print(s)

# DICTIONARY
# this is a key value pair of the list
# just like js object
d = {
    'ID':'Indonesia', 
    'JP':'Japan', 
    'SG':'Singapore'
}
print(d)
# to add an item
d['MY'] = 'Malaysia'
print(d)

# to get specific item
print(d['ID'])


# OPERATION ON LIST, SET
ol = [0,2,3,4,5,6,7,8,9]
os = {1,2,3,4,5,5,6,6,7,8}
print(len(ol), len(os))
print(min(ol), max(os))
print(ol.count(3))

# merging two different list
l1 = ['Hello', 'World']
l2 = ['From', 'Canada']
print(l1 + l2)

# to create a simple list
r = range(1, 8)
print(list(r), set(r))

# sort a list
sl = ['United States', 'Brazil', 'China', 'France']
sl.sort()
print(sl)
