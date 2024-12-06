import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../page";
import '@testing-library/jest-dom';

describe("Home", () => {
  it("loads and displays the correct number after input", () => {
    render(<Home />);

    const inputNumber = screen.getByLabelText(/enter a number/i);
    const submitButton = screen.getByText(/submit/i);

    // Simulate typing into the input field
    fireEvent.change(inputNumber, { target: { value: "40" } });

    // Simulate clicking the submit button
    fireEvent.click(submitButton);

    // Get the input field where the number is displayed
    const displayInput = screen.getByLabelText(/last number entered/i);

    // Check if the value of the display input is correct
    expect(displayInput).toHaveValue("40");
  });
});
