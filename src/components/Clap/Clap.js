import React, { useState, useCallback, useMemo } from 'react';
import classNames from "classnames";
import ClapIcon from './ClapIcon/ClapIcon';
import './Clap.scss'
import ClapCount from './ClapCount/ClapCount';
import ClapTotal from './ClapTotal/ClapTotal';
import { ClapContext } from './ClapContext';
import { useClapAnimation } from './UseClapAnimation';


const initialState = {
  count: 0,
  countTotal: Math.floor(Math.random() * (1000 - 500 + 1) + 500),
  clicked: false
}

const { Provider } = ClapContext;

const Clap = ({
  children,
  className = '',
  style : userStyles = {},
  onClap = () => {}
}) => {
  const [clapState, setClapState] = useState(initialState)
  const [{ refClap, refCount, refTotal }, setRefState ] = useState({})
  const setRef = useCallback (ref => {
    if (ref) {
      console.log('ref ', ref.dataset.refkey)
      setRefState(prev => ({
        ...prev,
        [ref.dataset.refkey] : ref
      }))
    }
  }, [])

  const animationTimeline = useClapAnimation({
    timelineDuration : 300,
    bounceElement: refCount,
    fadeElement: refTotal,
    burstElement: refClap
  })

  const handleClapClick = () => {
    animationTimeline.replay();
    setClapState(({ count, countTotal }) => ({
      count : count + 1,
      countTotal: countTotal + 1,
      clicked: true
    }))
  }

  const getProviderValue = useMemo(() => ({
    ...clapState,
    setRef
  }), [clapState, setRef])

  return (
    <Provider value={getProviderValue}>
      <button
        className={classNames('clap', className)}
        style={userStyles}
        onClick={handleClapClick}
        data-refkey="refClap"
        ref={setRef}
      >
        {children}
      </button>
    </Provider>

  );
};

Clap.Icon = ClapIcon;
Clap.Count = ClapCount;
Clap.Total = ClapTotal;

export default Clap;