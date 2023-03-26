a = int(input())
b = int(input())
a = a if a % 2 == 0 else a + 1
for x in range(a, b+1, 2):
    print(x, end=' ')