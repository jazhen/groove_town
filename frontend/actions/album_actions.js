import * as albumAPIUtil from '../util/album_api_util';
import { setLoading } from './general_actions';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';
export const CLEAR_ALL_ALBUM_ERRORS = 'CLEAR_ALL_ALBUM_ERRORS';

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

export const receiveAlbumErrors = (errors) => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors,
  };
};

export const clearErrors = (errors, keys) => {
  return {
    type: CLEAR_ALBUM_ERRORS,
    errors,
    keys,
  };
};

export const clearAllErrors = () => {
  return {
    type: CLEAR_ALL_ALBUM_ERRORS,
  };
};

export const fetchAlbums = () => (dispatch) => {
  dispatch(setLoading());
  return albumAPIUtil
    .fetchAlbums()
    .then((albums) => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = (albumId) => (dispatch) => {
  dispatch(setLoading());
  return albumAPIUtil
    .fetchAlbum(albumId)
    .then((album) => dispatch(receiveAlbum(album)));
};

export const createAlbum = (album) => (dispatch) => {
  dispatch(setLoading());
  return albumAPIUtil.createAlbum(album).then(
    (createdAlbum) => dispatch(receiveAlbum(createdAlbum)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON))
  );
};

export const updateAlbum = (album, albumId) => (dispatch) => {
  dispatch(setLoading());
  return albumAPIUtil.updateAlbum(album, albumId).then(
    (createdAlbum) => dispatch(receiveAlbum(createdAlbum)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON))
  );
};

export const clearAlbumErrors = (errors, keys) => (dispatch) => {
  return dispatch(clearErrors(errors, keys));
};

export const clearAllAlbumErrors = () => (dispatch) => {
  return dispatch(clearAllErrors());
};
