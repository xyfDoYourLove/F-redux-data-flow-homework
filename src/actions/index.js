export const LOGIN = 'LOGIN';

export const switchLogin = isLogin => {
  return {
    type: LOGIN,
    payload: isLogin
  };
};
