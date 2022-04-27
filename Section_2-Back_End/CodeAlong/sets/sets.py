# pylint: disable-all
import timeit

lemon = { 'sour', 'yellow', 'fruit', 'bumpy' }
banana = { 'fruit', 'smooth', 'sweet', 'yellow' }
orange = { 'fruit', 'bumpy', 'orange', 'sweet' }

print(lemon | banana)

print(lemon & banana)

print(lemon - banana)

print(banana - lemon)

print(lemon ^ banana)

for adj in banana:
    print(adj)

def remove_duplicates(original):
    unique = []
    [unique.append(n) for n in original if n not in unique]
    return unique

print(timeit.timeit('list(set([1,2,3,1,7]))', number=10000))

print(timeit.timeit('remove_duplicates([1,2,3,1,7])', globals=globals(), number=10000))