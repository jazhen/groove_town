/* eslint-disable no-undef */

export const fetchAlbums = () => {
  return $.ajax({
    url: 'api/albums',
    method: 'GET',
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    url: `api/albums/${albumId}`,
    method: 'GET',
  });
};

export const createAlbum = (album) => {
  return $.ajax({
    url: 'api/albums',
    method: 'POST',
    data: album,
    contentType: false,
    processData: false,
  });
};

export const updateAlbum = (album, albumId) => {
  return $.ajax({
    url: `api/albums/${albumId}`,
    method: 'PATCH',
    data: album,
    contentType: false,
    processData: false,
  });
};

export const deleteAlbum = (albumId) => {
  return $.ajax({
    url: `api/albums/${albumId}`,
    method: 'DELETE',
  });
};
