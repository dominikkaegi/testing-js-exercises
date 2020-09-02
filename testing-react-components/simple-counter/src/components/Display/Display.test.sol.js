import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Display displays the value prop", () => {
  const { getByText, rerender } = render(<Display value={"rocket"} />);
  getByText(/rocket/i);

  rerender(<Display value={"10"} />)
  getByText(/10/i);
});
