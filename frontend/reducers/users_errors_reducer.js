import {
  CLEAR_USER_ERRORS,
  RECEIVE_USER_ERRORS,
} from '../actions/user_actions';

const userErrorsReducer = (prevState = [], action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_USER_ERRORS:
      return [];
    default:
      return prevState;
  }
};

export default userErrorsReducer;
