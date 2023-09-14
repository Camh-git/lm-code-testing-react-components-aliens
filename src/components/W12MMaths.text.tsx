import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MMaths from "./W12MMaths";
import user from "@testing-library/user-event";

describe("Test the component", () => {
  const mockValidation = jest.fn();
  const [mathAnswer, setMathAnswer] = useState("not 4");
  const testMath = (
    <W12MMaths
      answer={mathAnswer}
      onChangeCalc={(value) => setMathAnswer(value)}
      validate={(value: string) => ["4"]}
    />
  );

  test("The component renders correctly", () => {
    render(testMath);
    const elementText = screen.getByText("What is 2+2?");
    expect(elementText).toBeInTheDocument();
  });
  test("Input handling, select each option and check for the correct state", () => {
    render(testMath);
    let target = screen.getByLabelText("What is 2+2?");
    const comp = testMath;
    selectValue(target, "4");
    expect(mathAnswer).toBe("4");
    selectValue(target, "Not 4");
    expect(mathAnswer).toBe("Not 4");
  });
  test("Confirm validation", () => {
    render(testMath);
    let target = screen.getByLabelText("What is 2+2?");
    //TODO: look up docs for mocking the select when the internet returns
    expect(mockValidation).toHaveBeenCalledTimes(1);
  });
});

async function selectValue(target: HTMLElement, value: string) {
  await user.selectOptions(target, "value");
}
