import React, { useContext } from 'react';
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

export default ClapCount;