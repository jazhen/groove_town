import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL = 'RECEIVE_ALL';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAll = ({ users, albums, tracks }) => {
  return {
    type: RECEIVE_ALL,
    users,
    albums,
    tracks,
  };
};

const receiveUser = ({ user, albums, tracks }) => {
  return {
    type: RECEIVE_USER,
    user,
    albums,
    tracks,
  };
};

export const fetchAll = () => (dispatch) => {
  return userAPIUtil.fetchAll().then((data) => dispatch(receiveAll(data)));
};

export const fetchUser = (userId) => (dispatch) => {
  return userAPIUtil
    .fetchUser(userId)
    .then((data) => dispatch(receiveUser(data)));
};
