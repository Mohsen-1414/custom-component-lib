import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "./Checkbox";

describe("Checkbox Component", () => {
  test("renders the checkbox with label", () => {
    render(
      <Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />
    );

    const checkbox = screen.getByLabelText("Test Checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  //   test("handles onChange event", () => {
  //     const handleChange = jest.fn();
  //     render(
  //       <Checkbox checked={false} onChange={handleChange} label="Test Checkbox" />
  //     );

  //     const checkbox = screen.getByLabelText("Test Checkbox") as HTMLInputElement;
  //     fireEvent.click(checkbox);

  //     expect(handleChange).toHaveBeenCalledTimes(1);
  //     expect(checkbox.checked).toBe(true);
  //   });

  test("can be disabled", () => {
    render(
      <Checkbox
        checked={false}
        onChange={() => {}}
        disabled
        label="Test Checkbox"
      />
    );

    const checkbox = screen.getByLabelText("Test Checkbox");
    expect(checkbox).toBeDisabled();
  });

  test("reflects the checked state correctly", () => {
    render(<Checkbox checked onChange={() => {}} label="Test Checkbox" />);

    const checkbox = screen.getByLabelText("Test Checkbox");
    expect(checkbox).toBeChecked();
  });

  test("reflects the unchecked state correctly", () => {
    render(
      <Checkbox checked={false} onChange={() => {}} label="Test Checkbox" />
    );

    const checkbox = screen.getByLabelText("Test Checkbox");
    expect(checkbox).not.toBeChecked();
  });
});
