import JestUnitTestPage from "../pages/jest/unittest/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 test", () => {
  render(<JestUnitTestPage />);

  const myText = screen.getByText("바바는 고양이입니다.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("바바의 취미 :");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("클릭미");
  expect(myText3).toBeInTheDocument();
});
