import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';


class Navbar extends Component {
  /* importing and make static ThemeContext not ThemeProvider component */
  static contextType = ThemeContext; //attach state in themecontextprovider to this component
  render() {
    // state in ThemeContextProvider what ever that pass in the value property  >> {isLight:true, ...}
    const { isLightTheme, light, dark } = this.context;
    console.log(this.context);
    const theme = isLightTheme ? light : dark;

    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;