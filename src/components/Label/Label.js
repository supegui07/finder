import React from "react";
import PropTypes from "prop-types";
import styles from "./Label.scss";

const Label = ({ text, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={styles.label}>
      <span className="label-text" onClick={handleClick}>
        {text}
      </span>
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Label;
