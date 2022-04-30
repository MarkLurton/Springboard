def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f'{person["name"]} has been alive for {days} days')
    except KeyError as exc:
        print(f"Missing Key: {exc}")
    except TypeError:
        print("Expected person to be a dict.")


def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100))"

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")
    
    return sum(nums) / len(nums)

def handle_data():
    "Process data from database."

    ages = [10,40,50,99,103,2,0]

    try:
        avg = bounded_avg(ages)
        print("Average was: ", avg)
    except ValueError as exc:
        print("Invalid age in list of ages")