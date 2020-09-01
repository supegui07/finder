import React, { useState } from 'react';
import LinkText from '../LinkText/LinkText';
import NavBarContainer from './NavBarContainer';
import './NavBar.scss';

const NavBar = () => {
  const [selected, setSelected] = useState('')

  const handleClick = (selectedLink) => {
    setSelected(selectedLink)
  }

  return (
    <NavBarContainer onClick={handleClick} selected={selected}>
      {({ getLinkProps }) => {
        return (
          <nav className="nav">
            <ul className="nav-bar">
              <li>
                <LinkText 
                  {...getLinkProps({text: 'Finder'})}
                  className='nav-item'
                />
              </li>
              <li>
                <LinkText 
                  {...getLinkProps({text: 'Sign Up'})}
                  className='nav-item'
                />
              </li>
              <li>
                <LinkText 
                  {...getLinkProps({text: 'Sign In'})} 
                  className='nav-item'
                />
              </li>
            </ul>
          </nav>
        )
      }}
    </NavBarContainer>
  );
};

export default NavBar;