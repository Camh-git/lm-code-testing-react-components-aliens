import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MSpecies from "./W12MSpecies";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const [speciesName, setSpeciesName] = useState("Humans");
  test("The component renders correctly", () => {
    render(
      <W12MSpecies
        species={speciesName}
        onChangeSpecies={(value) => setSpeciesName(value)}
        validate={(value: string) => ["Human"]}
      />
    );
    const elementText = screen.getByText("Species Name:");
    expect(elementText).toBeInTheDocument();
  });
  test("The component handles input properly", () => {
    const comp = (
      <W12MSpecies
        species={speciesName}
        onChangeSpecies={(value) => setSpeciesName(value)}
        validate={(value: string) => ["Human"]}
      />
    );
    let target = screen.getByLabelText("Species Name:");
    typeIntoElement(target, "Dalek");
    expect(speciesName).toBe("Dalek");
    typeIntoElement(target, "Cat");
    expect(speciesName).toBe("Cat");
  });
});
