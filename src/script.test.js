// import { expect, test } from "@jest/globals";
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { expect, test } = require("@jest/globals");
// import { expect, test } from "@jest/globals";
// import test from "@jest/globals";
// import expect from "@jest/globals";
// import sum from "./script.ts";

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const sum = require("./script.ts");

test("add 1 & 2", () => {
  expect(sum(1, 2)).toBe(3);
});
