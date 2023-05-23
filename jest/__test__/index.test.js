import { add } from "../pages/jest/index";

it("2와 3이 주어졌을 때, 5가 나와야 한다.", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
