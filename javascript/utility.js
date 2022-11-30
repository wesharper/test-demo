/**
 * The fibonacci sequence is a sequence of numbers starting with 0 an 1 where each subsequent
 * number in the sequence is the sum of the previous 2.
 * @param {number} num - represents n, i.e. 3 is the 3rd fibonacci number, 0 indexed
 * @returns {number} nth fibonacci number
 */
export function fibonacci(num, a = 0, b = 1) {
  if (!Number.isInteger(num)) {
    throw new Error("Must pass an integer value");
  }
  if (num <= 0) {
    return a;
  }
  return fibonacci(num - 1, b, a + b);
}
