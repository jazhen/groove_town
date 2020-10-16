import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = ({ user }) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user,
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

const clearAllErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};

export const login = (user) => (dispatch) => {
  return sessionAPIUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return sessionAPIUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const signup = (user) => (dispatch) => {
  return sessionAPIUtil.signup(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const demoLogin = () => {
  const demoUser = {
    username_or_email: 'demoUser',
    password: 'password',
  };

  return login(demoUser);
};

export const clearErrors = () => (dispatch) => {
  return dispatch(clearAllErrors());
};
