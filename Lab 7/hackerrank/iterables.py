n = int(input())
l = input().split()
k = int(input())
cnt = 0
for s in l:
    if s == 'a':
        cnt+=1
prob = 0
fail = 1
for x in range(k):    
    succ = cnt/(n-x)
    prob += fail * succ
    fail *= ((n-x)-cnt)/(n-x)
print(prob)