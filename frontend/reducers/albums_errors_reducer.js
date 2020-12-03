import {
  RECEIVE_ALBUM_ERRORS,
  CLEAR_ALBUM_ERRORS,
} from '../actions/album_actions';

const albumsErrorsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  const nextState = { ...prevState };

  switch (action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    case CLEAR_ALBUM_ERRORS:
      action.keys.forEach((key) => {
        nextState[key] = [];
      });
      return nextState;
    default:
      return prevState;
  }
};

export default albumsErrorsReducer;
