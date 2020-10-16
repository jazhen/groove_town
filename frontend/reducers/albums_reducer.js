import { RECEIVE_USER } from '../actions/user_actions';

const albumsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_USER:
      return { ...prevState, ...action.albums };
    default:
      return prevState;
  }
};

export default albumsReducer;
