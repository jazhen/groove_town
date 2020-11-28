import { RECEIVE_USER } from '../actions/user_actions';

const tracksReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_USER:
      return { ...prevState, ...action.tracks };
    default:
      return prevState;
  }
};

export default tracksReducer;
