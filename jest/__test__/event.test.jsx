import JestUnitTestPage from "../pages/jest/event/index";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("버튼클릭 테스트", () => {
  render(<JestUnitTestPage />);
  fireEvent.click(screen.getByRole("count-button"));
  expect(screen.getByRole("count")).toHaveTextContent("1");
});
