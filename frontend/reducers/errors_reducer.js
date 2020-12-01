import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import albumsErrorsReducer from './albums_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  albums: albumsErrorsReducer,
});

export default errorsReducer;
