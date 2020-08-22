import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { Switch } from 'antd';
import 'antd/dist/antd.css';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax, transition: '1s' }}>
      <h1 style={{ background: theme.ui, color: theme.syntax, transition: '1s' }}>Context App</h1>
      <div style={{ marginBottom: '10px' }}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
        <span style={{ marginLeft: '10px' }}>
          <Switch checkedChildren="Login" unCheckedChildren="Logout" defaultChecked onChange={toggleAuth} />
        </span>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;