import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/pnbank-logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="P&N Bank" style={{ height: '40px' }} />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Jobs" className="nav-link" activeClassName="active">
              Job Board
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/preferences" className="nav-link" activeClassName="active">
              Preferences
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/how-to-apply" className="nav-link" activeClassName="active">
              How to Apply
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;