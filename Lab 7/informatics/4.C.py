n = int(input())
s = input()
l = s.split()
cnt = 0
for x in l:
    if (int(x) > 0):
        cnt+=1
print(cnt)