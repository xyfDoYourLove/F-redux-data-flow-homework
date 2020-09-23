import { LOGIN } from '../actions';

const isLogin = (state = false, action) => {
  if (action.type === LOGIN) {
    return action.payload;
  }
  return state;
};

export { isLogin };
