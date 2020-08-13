import React from "react";
import PropTypes from "prop-types";
import "./InputText.scss";

const InputText = React.memo(({ type, value, placeholder, onChange, inputTextRef }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      aria-label="input-text"
      className="inputText"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      ref={inputTextRef}
    />
  );
});

InputText.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputTextRef: PropTypes.object,
};

export default InputText;
