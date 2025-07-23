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
      <Link to="/terms">Terms and Conditions</Link>
      <Link to="/shareholder">Shareholder Rights Directive</Link>
      <Link to="/stewardship">UK Stewardship Code</Link>
    </nav>
  </header>
);

export default Header;
