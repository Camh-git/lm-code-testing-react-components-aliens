import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MSJustification from "./W12MJustification";

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
  });
});
