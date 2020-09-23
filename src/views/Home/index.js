import React, { Component } from 'react';
import Highlight from 'react-highlight';

export const USER_INFO_SAMPLE = `{
  "name": "Kevin", // 用户名
  "id": "273191", // 用户id
  "avatar": "https://avatars2.githubusercontent.com/u/40817605", //用户头像
  "permissions": [ 
    "PROFILE", // 个人信息
    "NOTIFICATION" // 通知中心
   ] // 用户权限模块
}`;

class Home extends Component {
  render() {
    return (
      <article className="main-view home">
        <h2>Practice</h2>
        <p>
          背景：用户的登录/登出功能是网站的常见功能之一，请基于课程所学内容，在现有代码基础上添加登录/登出功能
        </p>
        <p>
          用户API：请使用<code>GET</code>请求
          <code>https://my-json-server.typicode.com/kevindongzg/demo/login</code> 进行模拟登录,
          用户信息返回结果如下：
        </p>
        <Highlight>{USER_INFO_SAMPLE}</Highlight>
        <p>基于以上获取的用户信息，进行登录(及登出)功能的实现，要求如下：</p>
        <ol>
          <li>
            点击 <code>Sign in</code> 通过登录接口进行登录（点击请求接口直接登录），进入登录状态。
          </li>
          <li>
            点击 <code>Sign out</code> 进行登出，回到登出状态。
          </li>
          <li>
            登录状态下 <code>Header</code> 中展示用户名和头像。
          </li>
          <li>
            登录状态下 <code>个人信息</code> 中展示用户名，id和头像。
          </li>
          <li>
            除了<code>首页</code> 外，登录状态下菜单栏的展示需要根据用户各模块权限信息进行展示， 即
            <code>报表</code>菜单在该用户登录后不应该展示。
          </li>
          <li>
            除了<code>首页</code>外，其他页面能否进入需根据用户登录及各模块权限状态控制。
          </li>
          <li>
            使用<code>redux</code>, <code>react-redux</code>进行状态管理。
          </li>
        </ol>
      </article>
    );
  }
}

export default Home;
