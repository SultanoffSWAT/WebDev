d = {}
l = []
n = int(input())
for x in range(n):
    s = input()
    l.append(s)
    d[s] = 0
for s in l:
    d[s] += 1
print(len(d))
for i in d.values():
    print(i, end = " ")