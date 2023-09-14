import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MSpecies from "./W12MSpecies";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const mockValidation = jest.fn();
  const [speciesName, setSpeciesName] = useState("Humans");
  const testSpecies = (
    <W12MSpecies
      species={speciesName}
      onChangeSpecies={(value) => setSpeciesName(value)}
      validate={(value: string) => ["Human"]}
    />
  );
  test("The component renders correctly", () => {
    render(testSpecies);
    const elementText = screen.getByText("Species Name:");
    expect(elementText).toBeInTheDocument();
  });
  test("The component handles input properly", () => {
    const comp = testSpecies;
    render(testSpecies);
    let target = screen.getByLabelText("Species Name:");
    typeIntoElement(target, "Dalek");
    expect(speciesName).toBe("Dalek");
    typeIntoElement(target, "Cat");
    expect(speciesName).toBe("Cat");
  });

  test("Confirm validation", () => {
    render(testSpecies);
    let target = screen.getByLabelText("Species Name:");
    typeIntoElement(target, "Ewok");
    expect(mockValidation).toHaveBeenCalledTimes(1);
    mockValidation.mockReturnValue(["Species name too long"]);
    expect(testSpecies).toBe("Ewok");
  });
});
