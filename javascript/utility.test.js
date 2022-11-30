import { fibonacci } from "./utility";

describe("`utilities`", () => {
  describe("`fibonacci()`", () => {
    it("returns 0 when given 0", () => {
      const result = fibonacci(0);
      expect(result).toBe(0);
    });

    it("returns 1 when given 1", () => {
      expect(fibonacci(1)).toBe(1);
    });

    it("returns 8 when given 6", () => {
      // [0, 1, 1, 2, 3, 5, 8]
      const result = fibonacci(6);
      expect(result).toBe(8);
    });

    it("returns 0 when given a negative number", () => {
      const result = fibonacci(-1);
      expect(result).toBe(0);
    });

    it("throws an error when given a non integer number", () => {
      expect(() => {
        fibonacci(1.4);
      }).toThrowError("Must pass an integer value");
    });

    it("throws an error when given a string", () => {
      expect(() => {
        fibonacci("asdf");
      }).toThrowError("Must pass an integer value");
    });
  });
});
