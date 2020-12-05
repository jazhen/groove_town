import {
  CLEAR_ALL_USER_ERRORS,
  RECEIVE_USER_ERRORS,
} from '../actions/user_actions';

const usersErrorsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_ALL_USER_ERRORS:
      return {};
    default:
      return prevState;
  }
};

export default usersErrorsReducer;
