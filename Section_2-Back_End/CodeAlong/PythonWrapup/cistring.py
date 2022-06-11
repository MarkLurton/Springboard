class CIString(str):
    """Subclass of string that is case-insensitive

        >>> CIString("apple") == CIString("Apple")
        True

        >>> CIString("apple") < CIString("Banana")
        True
    """

    def __eq__(self, other):
        "Is self == other?"
        return self.lower() == other.lower()

    def __lt__(self, other):
        "Is self < other?"
        return self.lower() < other.lower()

    def __le__(self, other):
        "Is self <= other?"
        return self.lower() <= other.lower()