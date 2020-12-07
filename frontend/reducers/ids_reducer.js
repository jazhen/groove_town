import { combineReducers } from 'redux';

import albumIdsReducer from './album_ids_reducer';

const idsReducer = combineReducers({
  albums: albumIdsReducer,
});

export default idsReducer;
