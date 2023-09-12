import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MPopulation from "./W12MPopulation";

describe("Test the component", () => {
  const [planetPop, setPlanetPop] = useState(0);
  test("The component renders correctly", () => {
    render(
      <W12MPopulation
        population={planetPop}
        onChangePop={(value) => setPlanetPop(value)}
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
      />
    );
  });
});
