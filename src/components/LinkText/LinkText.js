import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import './LinkText.scss';

const LinkText = ({ text, pathTo, onClick, isSelected, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick()
  }
  return (
    <Link
      to={pathTo}
      className={classNames('link-item', {'selected': isSelected}, className)}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

LinkText.propTypes = {
  text: PropTypes.string.isRequired,
  pathTo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  className: PropTypes.string
}

LinkText.defaultProps = {
  isSelected: false,
  className: ''
}

export default LinkText;