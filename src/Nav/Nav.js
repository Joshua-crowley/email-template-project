import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
  const navStyle = {
    color: 'black',
    textDecoration: 'none',
  }

  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3>Logo</h3>
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/signup'>
          <li>Signup</li>
        </Link>
        <Link style={navStyle} to='/login'>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
 
export default Nav;