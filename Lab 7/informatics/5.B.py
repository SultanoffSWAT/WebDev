def power(a, n):
    b = 1
    for x in range(n):
        b *= a
    print(b)
s = input()
a, n = s.split()
power(float(a), int(n))