import React from "react";
import About from "../About";
import { render, screen } from "@testing-library/react";

describe("About.jsx", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("is currentlty expected to contain lorem ipsum", () => {
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        {
          exact: false,
        }
      )
    ).toBeInTheDocument();
  });

  it("is expected to be accessible by id", () => {
    expect(screen.getByTestId("about-header")).toHaveTextContent("About Me");
  });
});
