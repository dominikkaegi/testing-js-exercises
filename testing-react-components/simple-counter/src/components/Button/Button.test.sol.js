import React from "react";
import Button from "./Button";
import user from "@testing-library/user-event";
import { render, fireEvent } from "@testing-library/react";

test.skip("Button fires onClick correctly", () => {
  const fn = jest.fn();
  const { getByText } = render(<Button onClick={fn}>Launch Rocket</Button>);
  const btn = getByText(/launch rocket/i);

  // Testing with fireEvent
  fireEvent.click(btn);
  expect(fn).toHaveBeenCalledTimes(1);

  fireEvent.click(btn);
  expect(fn).toHaveBeenCalledTimes(2);
});

test.skip("Button fires onClick correctly", () => {
  const fn = jest.fn();
  const { getByText } = render(<Button onClick={fn}>Launch Rocket</Button>);
  const btn = getByText(/launch rocket/i);

  // Testing with user-event
  user.click(btn);
  expect(fn).toHaveBeenCalledTimes(1);
});
