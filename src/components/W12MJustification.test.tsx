import { render, screen } from "@testing-library/react";
import { useState } from "react";
import W12MSJustification from "./W12MJustification";

test("The component renders correctly", () => {
  const [reasonToSave, setReasonToSave] = useState("Placeholder");
  render(
    <W12MSJustification
      reason={reasonToSave}
      onChangeReason={(value) => setReasonToSave(value)}
    />
  );
  const elementText = screen.getByText("Reason for sparing:");
  expect(elementText).toBeInTheDocument();
});
