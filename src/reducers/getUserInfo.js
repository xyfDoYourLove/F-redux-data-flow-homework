import { GET_USER_INFO } from '../actions';

const userInfo = (state = {}, action) => {
  if (action.type === GET_USER_INFO) {
    return action.payload;
  }
  return state;
};

export default userInfo;
