n = int(input())
s = input()
l = s.split()
for x in range(n//2):
    a = l[x]
    l[x] = l[n-1-x]
    l[n-1-x] = a
for x in l:
    print(x, end = " ")