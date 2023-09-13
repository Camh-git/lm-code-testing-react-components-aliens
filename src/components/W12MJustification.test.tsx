import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MSJustification from "./W12MJustification";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const [reasonToSave, setReasonToSave] = useState("Placeholder");
  test("The component renders correctly", () => {
    render(
      <W12MSJustification
        reason={reasonToSave}
        onChangeReason={(value) => setReasonToSave(value)}
      />
    );
    const elementText = screen.getByText("Reason for sparing:");
    expect(elementText).toBeInTheDocument();
  });
  test("The component handles input properly", () => {
    const comp = (
      <W12MSJustification
        reason={reasonToSave}
        onChangeReason={(value) => setReasonToSave(value)}
      />
    );
    let target = screen.getByLabelText("Reason for sparing: ");
    typeIntoElement(target, "Because we are nice people");
    expect(reasonToSave).toBe("Because we are nice people");
  });
});
