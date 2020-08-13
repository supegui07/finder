import React, { useState } from 'react';
import LinkText from '../LinkText/LinkText';
import NavBarContainer from './NavBarContainer';
import './NavBar.scss';

const NavBar = () => {
  const [selected, setSelected] = useState('')

  const handleClick = (selected) => {
    setSelected(selected)
  }

  return (
    <NavBarContainer onClick={handleClick} selected={selected}>
      {({ getLinkProps }) => {
        return (
          <nav className="nav">
            <ul className="nav-bar">
              <li>
                <LinkText {...getLinkProps({text: 'Finder'})}/>
              </li>
              <li>
                <LinkText {...getLinkProps({text: 'Sign Up'})}/>
              </li>
              <li>
                <LinkText {...getLinkProps({text: 'Sign In'})}/>
              </li>
            </ul>
          </nav>
        )
      }}
    </NavBarContainer>
  );
};

export default NavBar;