# pylint: disable=missing-module-docstring
# pylint: disable=invalid-name

age = 19
isBirthday = True

if age >= 21:
    print("You can come drink!")
    if isBirthday:
        print("Happy birthday! Here's a drink on the house")
elif age >= 18:
    print("You can come in but no drinking!")
    if isBirthday:
        print("Happy birthday! Here's a juice!")
else:
    print('Go home kid!')
