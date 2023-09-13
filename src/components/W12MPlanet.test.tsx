import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MPlanet from "./W12MPlanet";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const [planetName, setPlanetName] = useState("Earth");
  test("The component renders correctly", () => {
    render(
      <W12MPlanet
        planet={planetName}
        onChangePlanet={(value) => setPlanetName(value)}
      />
    );
    const elementText = screen.getByText("Planet Name:");
    expect(elementText).toBeInTheDocument();
  });
  test("Handle input with some random planet names,(not sure how to validate beyond string since planets can be named more or less anything not obscene)", () => {
    const comp = (
      <W12MPlanet
        planet={planetName}
        onChangePlanet={(value) => setPlanetName(value)}
      />
    );
    let target = screen.getByLabelText("Planet Name:");
    typeIntoElement(target, "Mars");
    expect(planetName).toBe("Mars");
    typeIntoElement(target, "Yavin");
    expect(planetName).toBe("Yavin");
  });
});
