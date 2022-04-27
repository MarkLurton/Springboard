# pylint: disable-all

vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']

pie_ingredients = ['flour', 'apples', 'sugar', 'eggs', 'salt']

for food in pie_ingredients:
    if food in vegan_no_nos:
        print(f"Oh no! Cannot eat {food}! It's not vegan!")
    else: 
        print(f'Yum! I love {food}!')