"""Example of unit tests."""
from unittest import TestCase
import arithmetic

class AdditionTestCase(TestCase):
    """Examples of unit tests."""

    def test_adder(self):
        """1st unit test (not very good)"""
        assert arithmetic.adder(2,3) == 5

    def test_adder2(self):
        """2nd unit test"""
        # instead of assert arithmetic.adder(2, 2) == 4
        self.assertEqual(arithmetic.adder(2, 2), 4)
        self.assertEqual(arithmetic.adder(40, 50), 90)
        self.assertEqual(arithmetic.adder(-2, -4), -6)
