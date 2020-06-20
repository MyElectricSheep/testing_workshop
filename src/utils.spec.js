import { add, sum, multiply } from "./utils";

describe("Utils", () => {
  describe("add", () => {
    it("Should add two numbers together", () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });
    it("Should throw an error if value passed is not a number", () => {
      expect(() => add("a", NaN)).toThrow();
    });

    describe("sum", () => {
      it("Should sum all the number in a given array", () => {
        const result = sum([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
      });
      it("Should throw an error if value passed is not an array", () => {
        const wrongInputs = [[1, "a", 3, NaN, Infinity], "Papaya", []];
        wrongInputs.forEach(input => {
          expect(() => sum(input)).toThrow();
        });
      });
    });
  });

  // describe("multiply", () => {
  //   it("multiply two numbers together", () => {
  //     const result = multiply(2, 2);
  //     expect(result).toBe(4);
  //   });
  // });
});
