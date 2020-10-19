import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALBUMS } from '../actions/album_actions';

const albumsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_USER:
      return { ...prevState, ...action.albums };
    case RECEIVE_ALBUMS:
      // return { ...prevState, ...action.albums };
      return action.albums;
    default:
      return prevState;
  }
};

export default albumsReducer;
