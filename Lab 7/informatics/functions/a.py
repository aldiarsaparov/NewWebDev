def min1(a, b, c, d):
    return min(min(a, b), min(c, d))

a, b, c, d = map(int, input().split())
print(min1(a, b, c, d))

