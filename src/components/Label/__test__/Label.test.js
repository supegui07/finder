import React from "react";
import { render } from "@testing-library/react";
import Label from "../Label";

describe("<Label />", () => {
  const fakeLabelText = "User Name:";
  const setup = () => {
    return render(<Label text={fakeLabelText} />);
  };

  it("render the component correctly", () => {
    const { container } = setup();

    const textLabel = container.firstChild.textContent;

    expect(textLabel).toBe(fakeLabelText);
  });

  it("snapshot component", () => {
    const { container } = setup();

    expect(container.firstChild).toMatchSnapshot();
  });
});
