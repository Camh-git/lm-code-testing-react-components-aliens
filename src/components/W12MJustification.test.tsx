import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MSJustification from "./W12MJustification";
import { typeIntoElement } from "./typeIntoElement";

describe("Test the component", () => {
  const mockValidation = jest.fn();
  const [reasonToSave, setReasonToSave] = useState("Placeholder");
  const testJustification = (
    <W12MSJustification
      reason={reasonToSave}
      onChangeReason={(value) => setReasonToSave(value)}
      validate={mockValidation}
    />
  );
  test("The component renders correctly", () => {
    render(testJustification);
    const elementText = screen.getByText("Reason for sparing:");
    expect(elementText).toBeInTheDocument();
  });
  test("The component handles input properly", () => {
    render(testJustification);
    let target = screen.getByLabelText("Reason for sparing: ");
    typeIntoElement(target, "Because we are nice people");
    expect(reasonToSave).toBe("Because we are nice people");
  });

  test("Confirm validation", () => {
    render(testJustification);
    let target = screen.getByLabelText("Reason for sparing: ");
    typeIntoElement(target, "Because we are good people");
    expect(mockValidation).toHaveBeenCalledTimes(1);
    mockValidation.mockReturnValue(["Reason too long"]);
    expect(reasonToSave).toBe("Because we are good people");
  });
});
