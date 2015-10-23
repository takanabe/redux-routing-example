import React, { PropTypes, Component } from 'react';

import mui, {AppBar} from 'material-ui';
const ThemeManager = require('material-ui/lib/styles/theme-manager');
import MyRawTheme from '../src/material_ui_raw_theme_file'

class Header extends Component {
  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }

  getChildContext(){
    return {  muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  }

  render() {
    return (
      <header className="header">
          <AppBar title="Header: Redux router example" />
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;
