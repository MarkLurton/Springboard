"""Examples of generators in Python"""

def firstngen(n):
    """Generates first n integers"""
    num = 0
    while num < n:
        yield num
        num += 1

def find_liked_num(nums):
    """Prompt user until they like a number."""

    for num in nums:
        if input(f"Do you like {num}? ") == "y":
            return num

def evens(start):
    """Yield even numbers starting at start."""

    while True:
        yield start
        start += 2
