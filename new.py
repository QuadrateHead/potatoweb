n = int(input())
k = 0
g = 0
for m in range(n):
    if k % 2 != 0:
        break
    m+=1
    i = n * m
    k = 0
    for g in range(i):
        g += 1 
        if i % g == 0:
            k += 1       
print(m)