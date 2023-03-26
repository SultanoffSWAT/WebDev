def func(ind, sum):
    global maxi
    for x in L[ind]:
        sum += (x**2) % int(m)
        if ind + 1 == len(L):
            if maxi < sum % int(m):
                maxi = sum % int(m)
        else:
            func(ind + 1, sum)
        sum -= (x**2) % int(m)
k, m = input().split()
L = []
maxi = 0
for x in range(int(k)):
    s = input().split()
    l = []
    for y in range(1, len(s)):
        l.append(int(s[y]))
    L.append(l)
func(0, 0)
print(maxi)