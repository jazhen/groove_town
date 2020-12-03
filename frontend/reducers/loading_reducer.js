import {
  CREATING_ALBUM,
  RECEIVE_ALBUM,
  RECEIVE_ALBUM_ERRORS,
} from '../actions/album_actions';

const initialState = {
  loading: false,
};

const loadingReducer = (prevState = initialState, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case CREATING_ALBUM:
      return { ...prevState, loading: true };
    case RECEIVE_ALBUM:
      return { ...prevState, loading: false };
    case RECEIVE_ALBUM_ERRORS:
      return { ...prevState, loading: false };
    default:
      return prevState;
  }
};

export default loadingReducer;
