import React from "react";
import PropTypes from "prop-types";
import styles from "./Label.scss";

const Label = ({ text, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div className={styles.label}>
      <span
        className="label-text"
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {text}
      </span>
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Label.defaultProps = {
  onClick: () => {}
}

export default Label;
