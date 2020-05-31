import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <img src="" alt="头像" />
          <span className="username">用户名</span>

          <a className="sign">Sign out</a>
        </div>
      </header>
    );
  }
}

export default Header;
