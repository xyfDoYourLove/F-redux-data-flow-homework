export const LOGIN = 'LOGIN';
export const GET_USER_INFO = 'GET_USER_INFO';

export const switchLogin = isLogin => {
  return {
    type: LOGIN,
    payload: isLogin
  };
};

export const getUserInfo = () => {
  return {
    type: GET_USER_INFO,
    payload: {
      name: 'Kevin',
      id: '273191',
      avatar: 'https://avatars2.githubusercontent.com/u/40817605',
      permissions: ['PROFILE', 'NOTIFICATION']
    }
  };
};
