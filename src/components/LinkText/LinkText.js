import React from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";
import './LinkText.scss';

const LinkText = ({ text, pathTo, onClick, isSelected }) => {
  return (
    <Link
      to={pathTo}
      className={classNames('link-item', {'selected': isSelected})}
      onClick={() => onClick()}
      >
      {text}
    </Link>
  );
};

export default LinkText;