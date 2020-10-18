# this example wil demonstrate the looping
# FOR
a = [10,20,30]

for item in a:
    print('Item no.{0}'.format(item))

# if you want to loop based on index
for item in range(len(a)):
    print('Loop index {0}'.format(a[item]))

# WHILE
# python doesnt have do while loop, so we stick with while only
i = 1
while i <= 2:
    print('While {0}'.format(i))
    i += 1

# we try to print reversed tree loop
for i in range(6):
    for j in range(i):
        print('*', end='') # this will print onto same line
    print()

# BREAK & CONTINUE THE LOOP
# continue
for i in a:
    if(i == 20):
        # we are skipping 20
        continue 
    print(i)

# break
for i in range(1, 5):
    if(i == 4):
        break
    print(i)

# for else
# we using this when the loop never returns a true value
for i in range(4):
    if(i == 4):
        print('Yeay')
else:
    print('No item 4 in list')

# list comprehension can be done to simplify things
# this similar with array_map in php
newList = [2 * i for i in a]
print(newList)