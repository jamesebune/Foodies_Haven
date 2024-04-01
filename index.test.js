//const { describe } = require("yargs");
const sum = require("./index");

test("addition of two numbers", () => {
  expect(sum(5, 5)).toBe(10);
});
