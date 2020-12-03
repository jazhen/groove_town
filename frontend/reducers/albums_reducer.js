import { RECEIVE_ALL, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const albumsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return {
        ...prevState,
        [Object.values(action.album)[0].id]: Object.values(action.album)[0],
      };
    case RECEIVE_USER:
      return { ...prevState, ...action.albums };
    case RECEIVE_ALL:
      return action.albums;
    default:
      return prevState;
  }
};

export default albumsReducer;
