import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MPlanet from "./W12MPlanet";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const mockValidation = jest.fn();
  const [planetName, setPlanetName] = useState("Earth");
  const testPlanet = (
    <W12MPlanet
      planet={planetName}
      onChangePlanet={(value) => setPlanetName(value)}
      validate={mockValidation}
    />
  );
  test("The component renders correctly", () => {
    render(testPlanet);
    const elementText = screen.getByText("Planet Name:");
    expect(elementText).toBeInTheDocument();
  });
  test("Handle input with some random planet names,(not sure how to validate beyond string since planets can be named more or less anything not obscene)", () => {
    render(testPlanet);
    const comp = testPlanet;
    let target = screen.getByLabelText("Planet Name:");
    typeIntoElement(target, "Mars");
    expect(planetName).toBe("Mars");
    typeIntoElement(target, "Yavin");
    expect(planetName).toBe("Yavin");
  });

  test("Confirm validation", () => {
    render(testPlanet);
    let target = screen.getByLabelText("Planet Name:");
    typeIntoElement(target, "Jupiter");
    expect(mockValidation).toHaveBeenCalledTimes(1);
    mockValidation.mockReturnValue(["Planet name too short"]);
    expect(testPlanet).toBe("Jupiter");
  });
});
