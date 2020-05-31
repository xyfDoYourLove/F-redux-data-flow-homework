import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../utils';
import './menu.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {modules.map(({ name, path }) => (
            <li className="nav-item" key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Menu;
