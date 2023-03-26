a = input()
b = 0
c = 1
for i in a:
    b += int(i)*(2**(len(a)-c))
    c += 1
print(b)