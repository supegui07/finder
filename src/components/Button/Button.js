import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "./Button.scss";


const Button = React.memo(({ text, type, onClick }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    onClick(e);
  }, [onClick]);

  return (
    <input
      aria-label="input-button"
      className="button"
      type={type}
      onClick={onClick && handleClick}
      value={text}
    />
  );
})

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
