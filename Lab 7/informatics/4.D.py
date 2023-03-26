n = int(input())
s = input()
l = s.split()
cnt = 0
for x in range(1, n):
    if (int(l[x]) > int(l[x-1])):
        cnt+=1
print(cnt)