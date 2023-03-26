def min(a, b, c, d):
    e = a
    if b < e:
        e = b
    if c < e:
        e = c
    if d < e:
        e = d
    print(e)
s = input()
a, b, c, d = s.split()
min(int(a), int(b), int(c), int(d))