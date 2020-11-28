import React from 'react';
import { Link } from 'react-router-dom';

const UserShowAlbumsList = ({ album }) => {
  return (
    <li key={album.id} className="user-albums__list-item">
      <div className="user-albums__album-container">
        <div className="user-albums__album-art-container">
          <Link
            to={`/users/${album.userId}/albums/${album.id}`}
            className="user-albums__album-link"
          >
            <img
              className="albums-index__album-art"
              src={album.artUrl}
              alt={`${album.band}-${album.name}`}
            />
          </Link>
        </div>
        <ul className="user-albums__metadata-list">
          <li className="user-albums__metadata-list-item">
            <Link
              to={`/users/${album.userId}/albums/${album.id}`}
              className="user-albums__album-name user-albums__metadata"
            >
              {album.name}
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

const UserShowAlbums = ({ user, albums }) => {
  const { albumIds } = user;

  if (!albumIds.length) {
    return null;
  }

  let userAlbumsClassModifier;
  if (albumIds.length < 5) {
    userAlbumsClassModifier = 'user-albums--min';
  } else {
    userAlbumsClassModifier = '';
  }

  return (
    <div className={`user-albums ${userAlbumsClassModifier}`}>
      <ul className="user-albums__list">
        {albumIds.map((albumId) => (
          <UserShowAlbumsList key={albumId} album={albums[albumId]} />
        ))}
      </ul>
    </div>
  );
};

export default UserShowAlbums;
