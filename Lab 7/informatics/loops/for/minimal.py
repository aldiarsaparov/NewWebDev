from math import sqrt

x = int(input())

for i in range(2, int(sqrt(x)) + 1):
    if x % i == 0:
        print(i)
        break
else:
    print(x)
