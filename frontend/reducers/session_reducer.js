import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const sessionReducer = (prevState = { id: null }, action) => {
  Object.freeze(prevState);
  const nextState = { ...prevState };

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.id = action.user.id;
      return nextState;
    case LOGOUT_CURRENT_USER:
      nextState.id = null;
      return nextState;
    default:
      return prevState;
  }
};

export default sessionReducer;
