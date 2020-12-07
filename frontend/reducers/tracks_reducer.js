import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL, RECEIVE_USER } from '../actions/user_actions';

const tracksReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...prevState, ...action.tracks };
    case RECEIVE_USER:
      return { ...prevState, ...action.tracks };
    case RECEIVE_ALBUMS:
      return action.tracks;
    case RECEIVE_ALBUM:
      return { ...prevState, ...action.tracks };
    case RECEIVE_ALL:
      return action.tracks;
    default:
      return prevState;
  }
};

export default tracksReducer;
