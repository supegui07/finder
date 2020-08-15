import React from "react";
import PropTypes from "prop-types";
import InputGroupContainer from "./InputGroupContainer";
import Label from "../Label/Label";
import InputText from "../InputText/InputText";
import "./InputGroup.scss";

const InputGroup = ({ text, value, onChange, placeholder, type }) => {
  return (
    <InputGroupContainer onChange={onChange}>
      {({ getLabelProps, getInputTextProps }) => {
        return (
          <div className="inputGroup">
            {text && (
              <Label
                {...getLabelProps({
                  text,
                })}
              />
            )}
            <InputText
              {...getInputTextProps({
                value,
                onChange,
                placeholder,
                type,
              })}
            />
          </div>
        );
      }}
    </InputGroupContainer>
  );
};

InputGroup.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputGroup.defaultProps = {
  text: '',
  placeholder: '',
  type: 'text'
}

export default InputGroup;
