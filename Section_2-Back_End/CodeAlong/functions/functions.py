# pylint: disable-all

def greet(person):
    """Greeting"""
    print(f"Hello, {person}!")


def divide(a, b):
    """Divides two numbers"""
    if type(a) == int and type(b) == int:
        return a / b
    return "a and b must be integers!"

def three_things(a, b, c):
    print("HI")

def send_email(to_email, from_email, subject, body):
    """Sends Email"""
    email = f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        -------------------------
        body: {body}
    """
    print(email)

send_email(subject="MEOW", to_email="blue@gmail.com",
from_email="mark@human.com", body="Cats go meow!")

def power(num, pwr=2):
    """"Raises first input to power of second input"""""
    return num ** pwr
