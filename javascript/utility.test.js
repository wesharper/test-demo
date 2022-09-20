const { add } = require("./utility");

describe("Utility Tests", () => {
  describe("add()", () => {
    it("returns the correct result when given two numbers", () => {
      const result = add(1, 3);
      expect(result).toEqual(4);
    });

    it("throws an Error when given a non-number", () => {
      expect(() => {
        add("foo", "bar");
      }).toThrow();
    });
  });
});
