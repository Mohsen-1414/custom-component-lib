import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from "./TextField";

describe("TextField Component", () => {
  test("renders the textfield with placeholder", () => {
    render(
      <TextField value="" onChange={() => {}} placeholder="Test Placeholder" />
    );

    const input = screen.getByPlaceholderText("Test Placeholder");
    expect(input).toBeInTheDocument();
  });

  test("can be disabled", () => {
    render(
      <TextField
        value=""
        onChange={() => {}}
        disabled
        placeholder="Test Placeholder"
      />
    );

    const input = screen.getByPlaceholderText("Test Placeholder");
    expect(input).toBeDisabled();
  });

  test("shows error state", () => {
    render(
      <TextField
        value=""
        onChange={() => {}}
        error
        placeholder="Test Placeholder"
      />
    );

    const input = screen.getByPlaceholderText("Test Placeholder");
    const container = input.parentElement;
    const errorMessage = screen.getByText("Error: Invalid input");

    expect(container).toHaveClass("error");
    expect(errorMessage).toBeInTheDocument();
  });
});
