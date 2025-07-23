import React from 'react';
import Header from './Header';

const HeaderWrapper = ({ children }) => (
  <div className="app-wrapper">
    <Header />
    <main className="main-content">{children}</main>
  </div>
);

export default HeaderWrapper;
