import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MMaths from "./W12MMaths";

describe("Test the component", () => {
  const [mathAnswer, setMathAnswer] = useState("not 4");
  test("The component renders correctly", () => {
    render(
      <W12MMaths
        answer={mathAnswer}
        onChangeCalc={(value) => setMathAnswer(value)}
      />
    );
    const elementText = screen.getByText("What is 2+2?");
    expect(elementText).toBeInTheDocument();
  });
  test("Input handling, select each option and check for the correct state", () => {
    const comp = (
      <W12MMaths
        answer={mathAnswer}
        onChangeCalc={(value) => setMathAnswer(value)}
      />
    );
  });
});
