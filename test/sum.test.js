const sum = require("../controller/sum");

test("Sum should be 3", () => {
  expect(sum(1, 2)).toBe(3);
});
