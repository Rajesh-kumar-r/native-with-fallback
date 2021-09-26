const findIndex = require("./index");
const normalArray = [1, 2, 3, 4, 5];
const arrayOfObject = [
  { name: "Rajesh", role: "developer" },
  { name: "Chandra Prakaash", role: "developer" },
  { name: "Prakash", role: "developer" },
];

test("find index of a value in a array", () => {
  expect(findIndex(normalArray, (value) => value === 2)).toBe(1);
  expect(findIndex(normalArray, (value) => value === 10)).toBe(-1);
  expect(findIndex(arrayOfObject, (value) => value.name === "Rajesh")).toBe(0);
});
