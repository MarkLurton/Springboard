"""Tests for algorithms.py"""
from unittest import TestCase
from algorithms import reverse_str, is_palindrome, factorial

class AlgorithmsTestCase(TestCase):
    """Tests for algorithms.py"""
    def test_reverse(self):
        """Tests for reverse"""
        self.assertEqual(reverse_str('hello'), 'olleh')
        self.assertEqual(reverse_str('Apple'), 'elppA')

    def test_is_palindrome(self):
        """Tests for is_palindrome"""
        self.assertTrue(is_palindrome('racecar'))
        self.assertTrue(is_palindrome('kayak'))
        # Should ignore casing
        self.assertTrue(is_palindrome('Racecar'))
        self.assertFalse(is_palindrome('taco'))

    def test_factorial(self):
        """Tests for factorial"""
        self.assertEqual(factorial(5), 120)
        self.assertEqual(factorial(3), 6)
        self.assertRaises(ValueError, factorial, -5)
        self.assertRaises(ValueError, factorial, 6.0)
        self.assertRaises(ValueError, factorial, "6")