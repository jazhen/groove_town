import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const nullUser = Object.freeze({
  id: null,
});

const sessionReducer = (prevState = nullUser, action) => {
  Object.freeze(prevState);
  const nextState = { ...prevState };

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.id = action.currentUser.id;
      return nextState;
    case LOGOUT_CURRENT_USER:
      return nullUser;
    default:
      return prevState;
  }
};

export default sessionReducer;
