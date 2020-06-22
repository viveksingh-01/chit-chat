import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/">
            <h1 className="navbar-brand">Chit Chat</h1>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
