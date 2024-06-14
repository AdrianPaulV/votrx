import React from 'react';
import './Header.css';
import logo from '../../../public/images/votrx-logo.svg';

const Header = () => (
  <header>
    <div className='header'>
      <div><img src={logo} className='logo' alt='VotrX logo'/></div>
      <div><span class='material-icons md-36 black'>menu</span></div>
    </div>
  </header>
);

export default Header;