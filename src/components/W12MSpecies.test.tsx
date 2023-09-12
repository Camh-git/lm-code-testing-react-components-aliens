import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MSpecies from "./W12MSpecies";

describe("Test the component", () => {
  const [speciesName, setSpeciesName] = useState("Humans");
  test("The component renders correctly", () => {
    render(
      <W12MSpecies
        species={speciesName}
        onChangeSpecies={(value) => setSpeciesName(value)}
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
      />
    );
  });
});
