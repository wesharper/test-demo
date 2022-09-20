import unittest
from utility import add


class AddUtilityTest(unittest.TestCase):
    def test_adding_two_integers_returns_correct_integer(self):
        result = add(2, 2)
        self.assertEqual(result, 4)

    def test_adding_two_floats_returns_correct_float(self):
        self.assertEqual(add(2.5, 2.3), 4.8)

    def test_adding_strings_raises_an_exception(self):
        self.assertRaises(TypeError, lambda: add('foo', 'bar'))


if __name__ == '__main__':
    unittest.main()
