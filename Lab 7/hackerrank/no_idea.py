s1 = input().split()
l = input().split()
A = input().split()
B = input().split()
As = set([])
Bs= set([])
for x in range(int(s1[1])):
    As.add(A[x])
    Bs.add(B[x])
h = 0
for i in l:
    if i in As:
        h += 1
    elif i in Bs:
        h -= 1
print(h)