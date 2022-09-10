import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => (
  <nav className="navigation">
    <div className="navbar container">
      <ul className="nav-links container">
        <li>
          <NavLink className="nav--links" to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
