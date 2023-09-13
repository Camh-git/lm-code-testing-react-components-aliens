import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MPopulation from "./W12MPopulation";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const [planetPop, setPlanetPop] = useState(0);
  test("The component renders correctly", () => {
    render(
      <W12MPopulation
        population={planetPop}
        onChangePop={(value) => setPlanetPop(value)}
        validate={(value: Number) => ["1000000"]}
      />
    );
    const elementText = screen.getByText("Number of beings: ");
    expect(elementText).toBeInTheDocument();
  });
  test("The component handles input properly(correct values, no negative numbers ect)", () => {
    const comp = (
      <W12MPopulation
        population={planetPop}
        onChangePop={(value) => setPlanetPop(value)}
        validate={(value: Number) => ["1000000"]}
      />
    );
    let target = screen.getByLabelText("Number of beings: ");
    typeIntoElement(target, "42000000000");
    expect(planetPop).toBe(42000000000);
  });
});
