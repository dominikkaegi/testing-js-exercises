import React from "react";
import { render } from "@testing-library/react";

import HelperText from "./HelperText";

test("HelperText renders with default values", () => {
  const INFO_COLOR = "teal";
  const { getByText } = render(<HelperText>Annotation</HelperText>);
  const helperSpan = getByText(/Annotation/i);
  expect(helperSpan).toHaveStyle(`color: ${INFO_COLOR}`);
});

test("HelperText does not render", () => {
  const { queryByText } = render(
    <HelperText show={false}>Annotation</HelperText>
  );
  expect(queryByText(/Annotation/i)).toBeNull();
});

test("HelperText does render success", () => {
  const SUCCESS_COLOR = "green";
  const { getByText } = render(
    <HelperText type="success">Annotation</HelperText>
  );
  const helperSpan = getByText(/Annotation/i);
  expect(helperSpan).toHaveStyle(`color: ${SUCCESS_COLOR}`);
});

test("HelperText does render error", () => {
  const SUCCESS_ERROR = "darkred";
  const { getByText } = render(
    <HelperText type="error">Annotation</HelperText>
  );
  const helperSpan = getByText(/Annotation/i);
  expect(helperSpan).toHaveStyle(`color: ${SUCCESS_ERROR}`);
});

test("HelperText does render warning", () => {
  const SUCCESS_WARNING = "gold";
  const { getByText } = render(
    <HelperText type="warning">Annotation</HelperText>
  );
  const helperSpan = getByText(/Annotation/i);
  expect(helperSpan).toHaveStyle(`color: ${SUCCESS_WARNING}`);
});
