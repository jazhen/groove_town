/* eslint-disable no-undef */

export const fetchAlbums = () => {
  return $.ajax({
    url: `api/albums`,
    method: 'GET',
  });
};

export const fetchAlbum = () => {
  return $.ajax({
    url: `api/albums`,
    method: 'GET',
  });
};
