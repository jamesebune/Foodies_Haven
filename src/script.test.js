import { expect, test } from "@jest/globals";
//const { describe, expect, test } = require("@jest/globals");
// import { expect, test } from "@jest/globals";
// import test from "@jest/globals";
// import expect from "@jest/globals";
//import sum from "./script.ts";
 
import sum from "./script.ts";

test("add 1 & 2", () => {
  expect(sum(1, 2)).toBe(3);
});
