import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { switchLogin } from '../actions';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.isLogin ? (
            <div>
              <img src="" alt="头像" />
              <span className="username">用户名</span>
              <a className="sign" onClick={this.props.handleLogOut}>
                Sign out
              </a>
            </div>
          ) : (
            <a className="sign" onClick={this.props.handleLogin}>
              Sign in
            </a>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ isLogin }) => ({
  isLogin
});

const mapDispatchToProps = dispatch => ({
  handleLogin() {
    dispatch(switchLogin(true));
  },
  handleLogOut() {
    dispatch(switchLogin(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
