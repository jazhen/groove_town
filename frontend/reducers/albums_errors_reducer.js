import {
  RECEIVE_ALBUM_ERRORS,
  CLEAR_ALBUM_ERRORS,
} from '../actions/album_actions';

const albumsErrorsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    case CLEAR_ALBUM_ERRORS:
      return {};
    default:
      return prevState;
  }
};

export default albumsErrorsReducer;
