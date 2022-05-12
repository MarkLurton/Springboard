def adder(x, y):
    """Add two numbers together."""
    print("Adding...")
    return x + y

assert adder(2, 5) == 7
assert adder(2, 7) == 10, "Expected 2 + 7 to be 10."
assert adder(2, 3) == 5

print("All done!")
