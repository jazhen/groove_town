import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...prevState, ...action.currentUser };
    case RECEIVE_ALL:
      return action.users;
    case RECEIVE_USER:
      return {
        ...prevState,
        [Object.values(action.user)[0].id]: Object.values(action.user)[0],
      };
    default:
      return prevState;
  }
};

export default usersReducer;
