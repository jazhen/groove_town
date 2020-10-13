import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const login = (user) => (dispatch) => {
  return sessionAPIUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveSessionErrors(errors))
  );
};

export const logout = () => (dispatch) => {
  return sessionAPIUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveSessionErrors(errors))
  );
};

export const signup = (user) => (dispatch) => {
  return sessionAPIUtil.signup(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveSessionErrors(errors))
  );
};
