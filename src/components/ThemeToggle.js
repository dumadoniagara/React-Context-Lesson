import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Switch } from 'antd';
import 'antd/dist/antd.css';


export default class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (<Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={toggleTheme} />)
  }
}
