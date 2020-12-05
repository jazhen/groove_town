import React from 'react';
import { Link } from 'react-router-dom';

const UserShowAlbumsList = ({ album, currentUserId }) => {
  return (
    <li key={album.id} className="user-albums__list-item">
      <div className="user-albums__album-container">
        <div className="user-albums__album-art-container">
          {album.userId === currentUserId ? (
            <div className="user-albums__album-update-container">
              <Link
                to={`/albums/${album.id}/edit`}
                className="user-albums__album-update"
              >
                edit
              </Link>
            </div>
          ) : null}
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

const UserShowAlbums = ({ user, albums, currentUserId }) => {
  const { albumIds } = user;

  if (!Object.keys(albums).length) {
    return null;
  }

  return (
    <div
      className={`user-albums ${albumIds.length < 5 ? 'user-albums--min' : ''}`}
    >
      <ul className="user-albums__list">
        {albumIds.map((albumId) => (
          <UserShowAlbumsList
            key={albumId}
            album={albums[albumId]}
            currentUserId={currentUserId}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserShowAlbums;
