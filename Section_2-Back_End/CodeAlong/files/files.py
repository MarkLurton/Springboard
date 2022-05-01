# pylint: disable-all

file = open("morse.txt", "r")

for line in file:
    print(f"LINE IS: {line}")

file.seek(0)

all_text = file.read()

file.close();

file2 = open('write_me.txt', 'a')
file2.write('\nLine 2')

file2.close()