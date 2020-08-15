import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputGroupContainer from "../InputGroupContainer";
import Label from "../../Label/Label";
import InputText from "../../InputText/InputText";

describe("<InputGroupContainer />", () => {
  const fakeInputGroupContainer = {
    text: "User Name:",
    value: "",
    onChange: jest.fn(),
    placeholder: "Enter a User Name",
  };

  const setup = () => {
    const { text, value, onChange, placeholder } = fakeInputGroupContainer;
    return render(
      <InputGroupContainer>
        {({ getLabelProps, getInputTextProps }) => {
          return (
            <div>
              <Label {...getLabelProps({ text })} />
              <InputText
                {...getInputTextProps({
                  value,
                  onChange,
                  placeholder,
                })}
              />
            </div>
          );
        }}
      </InputGroupContainer>
    );
  };

  it("renders the component correctly", async () => {
    const { getByText, getByLabelText } = setup();
    const { text, placeholder } = fakeInputGroupContainer;

    const label = getByText(fakeInputGroupContainer.text);
    const input = getByLabelText("input-text");

    expect(label.textContent).toBe(text);
    expect(input.placeholder).toBe(placeholder);
  });

  it("changes the input value when the user types", () => {
    const { getByLabelText } = setup();
    const { onChange } = fakeInputGroupContainer;
    const input = getByLabelText("input-text");
    const newValue = "supegui";

    fireEvent.change(input, { target: { value: newValue } });

    console.log('input.value ', input.value)

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(newValue);
  });

  it("focus input when the label is clicked", async () => {
    const { getByText, getByLabelText } = setup();

    const label = getByText(fakeInputGroupContainer.text);
    const input = getByLabelText("input-text");
    const spy = jest.spyOn(input, "focus");

    fireEvent.click(label);

    expect(spy).toBeCalled();
  });

  it("snapshot component", () => {
    const { container } = setup();
    const input = container.firstChild;

    expect(input).toMatchSnapshot();
  });
});
