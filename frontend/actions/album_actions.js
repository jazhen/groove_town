import * as albumAPIUtil from '../util/album_api_util';
import { setFormLoading, setStandardLoading } from './general_actions';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';
export const CLEAR_ALL_ALBUM_ERRORS = 'CLEAR_ALL_ALBUM_ERRORS';

const receiveAlbums = ({ albums, tracks, albumIds }) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
    tracks,
    albumIds,
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
  dispatch(setStandardLoading());
  return albumAPIUtil
    .fetchAlbums()
    .then((data) => dispatch(receiveAlbums(data)));
};

export const fetchAlbum = (albumId) => (dispatch) => {
  // dispatch(setFormLoading());
  return albumAPIUtil
    .fetchAlbum(albumId)
    .then((data) => dispatch(receiveAlbum(data)));
};

export const createAlbum = (album) => (dispatch) => {
  dispatch(setFormLoading());
  return albumAPIUtil.createAlbum(album).then(
    (createdAlbum) => dispatch(receiveAlbum(createdAlbum)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON))
  );
};

export const updateAlbum = (album, albumId) => (dispatch) => {
  dispatch(setFormLoading());
  return albumAPIUtil.updateAlbum(album, albumId).then(
    (updatedAlbum) => dispatch(receiveAlbum(updatedAlbum)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON))
  );
};

export const clearAlbumErrors = (errors, keys) => (dispatch) => {
  return dispatch(clearErrors(errors, keys));
};

export const clearAllAlbumErrors = () => (dispatch) => {
  return dispatch(clearAllErrors());
};
