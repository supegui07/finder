import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import './LinkText.scss';

const LinkText = ({ text, pathTo, onClick, isSelected }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick()
  }
  return (
    <Link
      to={pathTo}
      className={classNames('link-item', {'selected': isSelected})}
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
  isSelected: PropTypes.bool
}

LinkText.defaultProps = {
  isSelected: false
}

export default LinkText;