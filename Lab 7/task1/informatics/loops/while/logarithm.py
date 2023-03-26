n = int(input())
sm = 1
k = 0

while n > sm:
    sm *= 2
    k += 1
    
print(k)