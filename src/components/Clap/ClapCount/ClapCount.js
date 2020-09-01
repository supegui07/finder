import React, { useContext } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { ClapContext } from '../ClapContext';
import "./ClapCount.scss"

const ClapCount = ({ className = '', style: userStyles = {} }) => {
  const { count, setRef } = useContext(ClapContext)
  console.log('count', count)
  return (
    <span
      className={classNames('clap-count', className)}
      style={userStyles}
      data-refkey="refCount"
      ref={setRef}
    >
      +
      {count}
    </span>
  );
};

ClapCount.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string
};

ClapCount.defaultProps = {
  className: '',
  style: ''
}

export default ClapCount;