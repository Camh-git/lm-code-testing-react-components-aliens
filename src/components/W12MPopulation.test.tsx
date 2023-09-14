import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MPopulation from "./W12MPopulation";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const mockValidation = jest.fn();
  const [planetPop, setPlanetPop] = useState(0);
  const testPop = (
    <W12MPopulation
      population={planetPop}
      onChangePop={(value) => setPlanetPop(value)}
      validate={(value: Number) => ["1000000"]}
    />
  );
  test("The component renders correctly", () => {
    render(testPop);
    const elementText = screen.getByText("Number of beings: ");
    expect(elementText).toBeInTheDocument();
  });
  test("The component handles input properly(correct values, no negative numbers ect)", () => {
    const comp = testPop;
    render(testPop);
    let target = screen.getByLabelText("Number of beings: ");
    typeIntoElement(target, "42000000000");
    expect(planetPop).toBe(42000000000);
  });

  test("Confirm validation", () => {
    render(testPop);
    let target = screen.getByLabelText("Number of beings: ");
    typeIntoElement(target, "1234567890");
    expect(mockValidation).toHaveBeenCalledTimes(1);
    mockValidation.mockReturnValue(["Population too small"]);
    expect(planetPop).toBe("1234567890");
  });
});
