const isInteger = require("./index");

test("check is given value is number", () => {
  expect(isInteger(5)).toBe(true);
  expect(isInteger("5")).toBe(false);
  expect(isInteger(true)).toBe(false);
});
