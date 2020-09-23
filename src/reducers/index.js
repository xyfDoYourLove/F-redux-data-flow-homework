import { combineReducers } from 'redux';
import { isLogin } from './login';
import userInfo from './getUserInfo';

const reducers = combineReducers({
  isLogin,
  userInfo
});

export default reducers;
