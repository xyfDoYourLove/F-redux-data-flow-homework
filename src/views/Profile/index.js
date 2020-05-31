import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        <ul>
          <li>用户名：</li>
          <li>用户id：</li>
          <li>用户头像：</li>
          <img src="" alt="头像" />
        </ul>
      </div>
    );
  }
}

export default Profile;
