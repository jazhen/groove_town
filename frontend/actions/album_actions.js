import * as albumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

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

export const fetchAlbum = (albumId) => (dispatch) => {
  return albumAPIUtil
    .fetchAlbum(albumId)
    .then((album) => dispatch(receiveAlbum(album)));
};
