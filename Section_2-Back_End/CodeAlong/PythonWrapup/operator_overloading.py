class Color:
    def __init__(self, color_name, r, g, b):
        self.color_name = color_name
        self.rgb = (r, g, b)

    def __lt__(self, other):
        rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
        if self.color_name == 'purple' or other.color_name == 'purple':
            return 'HOW DARE YOU COMPARE ANYTHING TO PURPLE!?'
        return rainbow.index(self.color_name) < rainbow.index(other.color_name)

    def get_css_str(self):
        return f"rgb{self.rgb}"
