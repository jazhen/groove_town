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
          <div className="user-albums__album-update-container">
            <Link
              to={`/albums/${album.id}/edit`}
              className="user-albums__album-update"
            >
              edit
            </Link>
            <button type="button" className="user-albums__album-view">
              view
            </button>
          </div>
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

  return (
    <div
      className={`user-albums ${albumIds.length < 5 ? 'user-albums--min' : ''}`}
    >
      <ul className="user-albums__list">
        {albumIds.map((albumId) => (
          <UserShowAlbumsList key={albumId} album={albums[albumId]} />
        ))}
      </ul>
    </div>
  );
};

export default UserShowAlbums;
