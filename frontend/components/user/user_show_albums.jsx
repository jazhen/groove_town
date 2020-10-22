import React from 'react';

const UserShowAlbumsList = ({ album }) => {
  return (
    <li key={album.id} className="user-albums__list-item">
      <div className="user-albums__album-container">
        <div className="user-albums__album-art-container">
          <a className="user-albums__album-link">
            <div className="user-albums__album-art-placeholder" />
          </a>
        </div>
        <ul className="user-albums__metadata-list">
          <li className="user-albums__metadata-list-item">
            <a
              className="user-albums__album-name user-albums__metadata"
              href="#">
              {album.name}
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

const UserShowAlbums = ({ user, albums }) => {
  if (!user.albumIds.length) {
    return null;
  }

  let userAlbumsClassModifier;
  if (user.albumIds.length < 5) {
    userAlbumsClassModifier = 'user-albums--min';
  } else {
    userAlbumsClassModifier = '';
  }

  return (
    <div className={`user-albums ${userAlbumsClassModifier}`}>
      <ul className="user-albums__list">
        {user.albumIds.map((albumId) => (
          <UserShowAlbumsList key={albumId} album={albums[albumId]} />
        ))}
      </ul>
    </div>
  );
};

export default UserShowAlbums;
