"""Example of Python dynamic code"""

class Animal:

    def __init__(self, species, noise):
        self.species = species
        self.noise = noise

        def make_noise(self):
            """A dynamic method"""

            print(f"The {self.species} says {self.noise}")

        bound_method = make_noise.__get__(self, self.__class__)
        setattr(self, self.noise, bound_method)

blue = Animal('cat', 'meow')
blue.meow()

tammy = Animal('pig', 'oink')
tammy.oink()

