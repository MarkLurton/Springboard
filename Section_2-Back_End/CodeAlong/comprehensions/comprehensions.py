# pylint: disable=unnecessary-comprehension
"""Code along for Python comprehensions"""

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

evens = [num for num in nums if num % 2 == 0]


doubles = [ num * 2 for num in nums]

squares = [num ** 2 for num in nums]

strn = 'lmfao'

new_str = [char for char in strn]

def gen_board(size, initial_val=None): 
    """Generates a size x size board with values of initial_val"""
    return [[initial_val for x in range(size)] for y in range(size)]

chickens = [
    {"name": "Henry", "sex": "Rooster"},
    {"name": "Lady Gray", "sex": "Hen"},
    {"name": "Junior", "sex": "Rooster"},
    {"name": "Stevie Chicks", "sex": "Hen"},
    {"name": "Rocket", "sex": "Hen"},
    {"name": "Butters", "sex": "Rooster"}
]

hens = [chicken["name"] for chicken in chickens if chicken["sex"] == "Hen"]

scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 50, 82]
grades = ['PASS' if score >= 70 else "FAIL" for score in scores]
