const sum = require("../controller/sum");

test("Sum should be 3", () => {
  expect(sum(1, 6)).toBe(3);
});
