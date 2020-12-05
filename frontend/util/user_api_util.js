/* eslint-disable no-undef */

export const fetchAll = () => {
  return $.ajax({
    url: 'api/users/',
    method: 'GET',
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  });
};

export const updateUser = (user, userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    data: user,
    contentType: false,
    processData: false,
  });
};
