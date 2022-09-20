def add(num_a, num_b):
    if not isinstance(num_a, (int, float)) or not isinstance(num_b, (int, float)):
        raise TypeError()
    return num_a + num_b
