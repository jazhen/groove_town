import * as albumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
  };
};

export const fetchAlbums = () => (dispatch) => {
  return albumAPIUtil
    .fetchAlbums()
    .then((albums) => dispatch(receiveAlbums(albums)));
};
