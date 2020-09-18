import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  it("should return a function", () => {
    expect(typeof flipArgs()).toBe("function");
  });
  it("Should Call the function passed with reversed arguments", () => {
    const foo = (x, y) => x - y;
    const flippedFoo = flipArgs(foo);
    expect(flippedFoo(5, 10)).toBe(5);
  });
});
