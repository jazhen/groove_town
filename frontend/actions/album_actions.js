import * as albumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
  };
};

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

export const fetchAlbums = () => (dispatch) => {
  return albumAPIUtil
    .fetchAlbums()
    .then((albums) => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = () => (dispatch) => {
  return albumAPIUtil
    .fetchAlbum()
    .then((album) => dispatch(receiveAlbum(album)));
};
