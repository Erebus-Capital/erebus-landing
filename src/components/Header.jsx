import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/primary_white_logo.svg';

const Header = () => (
  <header className="header">
    <div className="home-logo">
      <Link to="/">
        <Logo className="home-logo-svg" />
      </Link>
    </div>
    <nav className="nav">
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/cookies">Cookie Policy</Link>
      <Link to="/terms">Terms and Conditions</Link>
      <Link to="/investor">Investor Privacy</Link>
      <Link to="/disclosure">Disclosure</Link>
    </nav>
  </header>
);

export default Header;
