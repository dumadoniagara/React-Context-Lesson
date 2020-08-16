import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { Switch } from 'antd';
import 'antd/dist/antd.css';


class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>
          {(themeContext) => {
            const { isLightTheme, light, dark } = themeContext;
            const { isAuthenticated, toggleAuth } = authContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
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
          }}
        </ThemeContext.Consumer>
      )
      }
      </AuthContext.Consumer>

    );
  }
}

export default Navbar;