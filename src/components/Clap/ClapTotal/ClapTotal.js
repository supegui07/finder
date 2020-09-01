import React, { useContext } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { ClapContext } from '../ClapContext';
import "./ClapTotal.scss"

const ClapTotal = ({ className = '', style: userStyles = {} })  => {
  const { countTotal, setRef } = useContext(ClapContext)
  return (
    <span
      className={classNames('clap-total', className)}
      style={userStyles}
      data-refkey="refTotal"
      ref={setRef}
    >
      {countTotal}
    </span>
  );
};

ClapTotal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string
};

ClapTotal.defaultProps = {
  className: '',
  style: ''
}

export default ClapTotal;