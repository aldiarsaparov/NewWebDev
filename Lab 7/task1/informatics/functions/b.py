def power(a, n):
    return float(a ** n)

a, n = map(float, input().split())
print(int(power(a, int(n))))
