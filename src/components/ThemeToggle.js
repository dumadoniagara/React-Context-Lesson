import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Switch } from 'antd';
import 'antd/dist/antd.css';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={toggleTheme} />
  )
}

export default ThemeToggle;