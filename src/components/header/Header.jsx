import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header id="header">
    <h1>NoKey NoShade</h1>
    <Link to="/">Home</Link>
  </header>
);
export default Header;
