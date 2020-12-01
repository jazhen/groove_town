import * as albumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';

const receiveAlbums = ({ albums, tracks }) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
    tracks,
  };
};

const receiveAlbum = ({ album, tracks }) => {
  return {
    type: RECEIVE_ALBUM,
    album,
    tracks,
  };
};

export const fetchAlbums = () => (dispatch) => {
  return albumAPIUtil
    .fetchAlbums()
    .then((albums) => dispatch(receiveAlbums(albums)));
};

export const receiveAlbumErrors = (errors) => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ALBUM_ERRORS,
  };
};

export const fetchAlbum = (albumId) => (dispatch) => {
  return albumAPIUtil
    .fetchAlbum(albumId)
    .then((album) => dispatch(receiveAlbum(album)));
};

export const createAlbum = (album) => (dispatch) => {
  return albumAPIUtil.createAlbum(album).then(
    (createdAlbum) => dispatch(receiveAlbum(createdAlbum)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON))
  );
};

export const clearAlbumErrors = () => (dispatch) => {
  return dispatch(clearErrors());
};
