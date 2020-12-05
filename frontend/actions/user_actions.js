import * as userAPIUtil from '../util/user_api_util';
import { setLoading } from './general_actions';

export const RECEIVE_ALL = 'RECEIVE_ALL';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_ALL_USER_ERRORS = 'CLEAR_ALL_USER_ERRORS';

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

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors,
  };
};

export const clearAllErrors = () => {
  return {
    type: CLEAR_ALL_USER_ERRORS,
  };
};

export const fetchAll = () => (dispatch) => {
  return userAPIUtil.fetchAll().then((data) => dispatch(receiveAll(data)));
};

export const fetchUser = (userId) => (dispatch) => {
  dispatch(setLoading());
  return userAPIUtil
    .fetchUser(userId)
    .then((data) => dispatch(receiveUser(data)));
};

export const updateUser = (user, userId) => (dispatch) => {
  dispatch(setLoading());
  return userAPIUtil.updateUser(user, userId).then(
    (data) => dispatch(receiveUser(data)),
    (errors) => dispatch(receiveUserErrors(errors.responseJSON))
  );
};

export const clearAllUserErrors = () => (dispatch) => {
  return dispatch(clearAllErrors());
};
