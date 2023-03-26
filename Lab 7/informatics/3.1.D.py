x = input()
d = input()
cnt = 0
for i in range(len(x)):
    b = True
    c = 0
    for j in d:
        if (x[i+c] != j):
            b = False
            break
        c += 1
    if b:
        cnt += 1
print(cnt)