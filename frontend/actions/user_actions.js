import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = ({ user, albums }) => {
  return {
    type: RECEIVE_USER,
    user,
    albums,
    // tracks
  };
};

export const fetchUser = (userId) => (dispatch) => {
  return userAPIUtil
    .fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)));
  // (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
};
