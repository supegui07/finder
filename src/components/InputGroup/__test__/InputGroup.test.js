import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputGroup from "../InputGroup";

describe("<InputGroup />", () => {
  const fakeInputGroup = {
    id: "user-name",
    text: "User Name:",
    placeholder: "Enter the User Name",
    onChange: jest.fn(),
    value: "",
  };
  const setup = () => {
    const { id, text, onChange, placeholder, value } = fakeInputGroup;
    return render(
      <InputGroup
        type="text"
        id={id}
        text={text}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  };

  it("changes the input value when the user types", () => {
    const { getByLabelText } = setup();
    const { onChange } = fakeInputGroup;
    const input = getByLabelText("input-text");

    const newValue = "supegui";
    fireEvent.change(input, { target: { value: newValue } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(newValue);
  });

  it("snapshot component", () => {
    const { container } = setup();
    const input = container.firstChild;

    expect(input).toMatchSnapshot();
  });
});
