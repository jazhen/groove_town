/* eslint-disable no-undef */

export const fetchAlbums = () => {
  return $.ajax({
    url: `api/albums`,
    method: 'GET',
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    url: `api/albums/${albumId}`,
    method: 'GET',
  });
};
