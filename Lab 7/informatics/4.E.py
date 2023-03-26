n = int(input())
s = input()
l = s.split()
b = True
for x in range(1, n):
    if ((int(l[x]) >= 0 and int(l[x-1]) >= 0) or (int(l[x]) <= 0 and int(l[x-1]) <= 0)):
        print("YES")
        b = False
        break
if b:
    print("NO")