const { test, expect } = require("@jest/globals");
const passwordVal = require("../password");

test("password check", () => {
  expect(passwordVal("pratik")).toBe("One uppercase is required");
});

test("password check", () => {
  expect(passwordVal("Pratik")).toBe("One number is required");
});

test("password check", () => {
  expect(passwordVal("Pratik1")).toBe("One special char is required");
});

test("password check", () => {
  expect(passwordVal("Pratik1_")).toBe("Password validated");
});
