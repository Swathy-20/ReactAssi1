import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Products</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Cart</a></li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
