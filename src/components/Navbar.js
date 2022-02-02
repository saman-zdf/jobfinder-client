import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import {
  FaAlignLeft,
  FaUserCircle,
  FaCareDown,
  FaCaretDown,
} from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={() => console.log('toggle sidebar!')}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            className='btn'
            type='button'
            onClick={() => console.log('show/hide dropdown')}
          >
            <FaUserCircle />
            Sam
            <FaCaretDown />
          </button>
          <div className='dropdown show-dropdown'>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => console.log('logout')}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
