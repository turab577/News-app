import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setdarkMode] = useState(false);

  const toggleMode = () => {
    setdarkMode(prevMode => !prevMode);
    if (darkMode) {
      document.body.style.backgroundColor = '#F5F5F5';
      document.body.style.color = '#333';
    } else {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#EAEAEA';
    }
  };

  const navLinkStyle = {
    color: darkMode ? '#EAEAEA' : '#333',
    padding: '10px 15px',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const navbarStyle = {
    backgroundColor: darkMode ? '#1F1F1F' : '#FFFFFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{...navLinkStyle, fontWeight: 'bold', fontSize: '1.5rem'}}>
            newsDaily
          </Link>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" style={navLinkStyle}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={navLinkStyle}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={navLinkStyle}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={navLinkStyle}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={navLinkStyle}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={navLinkStyle}>Technology</Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable dark mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;