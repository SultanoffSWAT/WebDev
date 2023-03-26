t = int(input())
l = []
for x in range(t):
    a = input()
    l.append(input().split())
for x in l:
    top = max(int(x[0]),int(x[-1]))
    while True:
        a = int(x[0])
        if len(x) == 1:
            if a <= top:
                print("Yes")
            else:
                print("No")
            break
        b = int(x[-1])
        if a <= top and a >= b:
            top = a
            x.pop(0)
        elif b <= top:
            top = b
            x.pop()
        else:
            print("No")
            break