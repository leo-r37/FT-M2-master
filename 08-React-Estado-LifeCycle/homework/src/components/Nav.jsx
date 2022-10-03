import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='container'>
      <img src={Logo} alt="Logo" />
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
