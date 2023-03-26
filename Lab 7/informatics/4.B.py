n = int(input())
s = input()
l = s.split()
for x in l:
    if (int(x) % 2 == 0):
        print(x, end = " ")