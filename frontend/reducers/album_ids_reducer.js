import { RECEIVE_ALBUMS } from '../actions/album_actions';

const albumIdsReducer = (prevState = [], action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albumIds;
    default:
      return prevState;
  }
};

export default albumIdsReducer;
