import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import { menuOptions } from './utils';
import './App.scss';

class App extends Component {
  render() {
    const permissions = this.props.isLogin ? this.props.userInfo.permissions : ['REPORT'];
    return (
      <div className="app">
        <Router>
          <Header />
          <Menu />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {menuOptions
                .filter(item => permissions.includes(item.permissionCode))
                .map(({ path, component }) => (
                  <Route key={path} path={path}>
                    {component}
                  </Route>
                ))}
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ isLogin, userInfo }) => ({
  isLogin,
  userInfo
});

export default connect(mapStateToProps)(App);
