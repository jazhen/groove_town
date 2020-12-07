import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM_ERRORS,
} from '../actions/album_actions';
import {
  SET_FORM_LOADING,
  SET_STANDARD_LOADING,
} from '../actions/general_actions';
import { RECEIVE_USER, RECEIVE_USER_ERRORS } from '../actions/user_actions';

const loadingReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case SET_FORM_LOADING:
      return { ...prevState, form: true };
    case SET_STANDARD_LOADING:
      return { ...prevState, standard: true };
    case RECEIVE_USER:
      return { ...prevState, form: false, standard: false };
    case RECEIVE_ALBUM:
      return { ...prevState, form: false };
    case RECEIVE_ALBUM_ERRORS:
      return { ...prevState, form: false };
    case RECEIVE_USER_ERRORS:
      return { ...prevState, form: false };
    case RECEIVE_ALBUMS:
      return { ...prevState, standard: false };
    default:
      return prevState;
  }
};

export default loadingReducer;
