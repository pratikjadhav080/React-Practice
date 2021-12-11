const convertTime = require("../timeConverter");

test("Time conversion", () => {
  expect(convertTime(200000)).toBe("0 hours 3 minutes 20 seconds");
});

test("Time conversion", () => {
  expect(convertTime(180000)).toBe("0 hours 3 minutes 0 seconds");
});
