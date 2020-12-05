import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM_ERRORS,
} from '../actions/album_actions';
import { SET_LOADING } from '../actions/general_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const loadingReducer = (prevState = false, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case SET_LOADING:
      return true;
    case RECEIVE_USER:
      return false;
    case RECEIVE_ALBUM:
      return false;
    case RECEIVE_ALBUMS:
      return false;
    case RECEIVE_ALBUM_ERRORS:
      return false;
    default:
      return prevState;
  }
};

export default loadingReducer;
