import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { getUserInfo, switchLogin } from '../actions';

class Header extends Component {
  componentDidMount() {
    this.props.handleGetUserInfo();
  }

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.isLogin ? (
            <div>
              <img src={this.props.userInfo.avatar} alt="头像" />
              <span className="username">{this.props.userInfo.name}</span>
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

const mapStateToProps = ({ isLogin, userInfo }) => ({
  isLogin,
  userInfo
});

const mapDispatchToProps = dispatch => ({
  handleLogin() {
    dispatch(switchLogin(true));
  },
  handleLogOut() {
    dispatch(switchLogin(false));
  },
  handleGetUserInfo() {
    dispatch(getUserInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
