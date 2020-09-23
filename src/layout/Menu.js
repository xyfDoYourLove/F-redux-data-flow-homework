import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { menuOptions } from '../utils';
import './Menu.scss';

class Menu extends Component {
  render() {
    const permissions = this.props.isLogin ? this.props.userInfo.permissions : ['REPORT'];
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {menuOptions
            .filter(item => permissions.includes(item.permissionCode))
            .map(({ name, path }) => (
              <li className="nav-item" key={name}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ isLogin, userInfo }) => ({
  isLogin,
  userInfo
});

export default connect(mapStateToProps)(Menu);
