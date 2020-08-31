import React, { useContext } from 'react';
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

export default ClapTotal;