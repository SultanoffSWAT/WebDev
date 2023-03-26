import math
x = int(input())
sum = 0
for i in range(1, math.trunc(math.sqrt(x)) + 1):
    if (x % i == 0):
        sum += 2
if (math.trunc(math.sqrt(x)) == math.sqrt(x)):
    sum -= 1
print(sum)