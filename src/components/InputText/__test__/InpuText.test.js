import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputText from "../InputText";

describe("<InputText />", () => {
  const fakeInputText = {
    type: "text",
    value: "",
    inputTextRef: React.createRef(),
  };
  const handleChange = jest.fn();

  const setup = () => {
    return render(<InputText {...fakeInputText} onChange={handleChange} />);
  };

  it("render the component correctly with props", () => {
    const { container } = setup();
    const input = container.firstChild;
    const newValue = "user fake";

    fireEvent.change(input, { target: { value: newValue } });

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(newValue);
  });

  it("snapshot component", () => {
    const { container } = setup();
    const input = container.firstChild;

    expect(input).toMatchSnapshot();
  });
});
