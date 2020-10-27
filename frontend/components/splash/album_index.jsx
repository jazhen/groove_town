import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndex = ({ album }) => {
  return (
    <li className="albums-index__list-item">
      <div className="albums-index__album-container">
        <div className="albums-index__album-art-container">
          <Link
            to={`/users/${album.user_id}/albums/${album.id}`}
            className="albums-index__album-name albums-index__metadata"
          >
            <div className="albums-index__album-art-container">
              {album.photoUrl ? (
                <img
                  className="albums-index__album-art"
                  src={album.photoUrl}
                  alt={`${album.band}-${album.name}`}
                />
              ) : (
                ''
              )}
            </div>
          </Link>
        </div>
        <ul className="albums-index__metadata-list">
          <li className="albums-index__metadata-list-item">
            <Link
              to={`/users/${album.user_id}/albums/${album.id}`}
              className="albums-index__album-name albums-index__metadata"
            >
              {album.name}
            </Link>
          </li>
          <li className="albums-index__metadata-list-item">
            <Link
              to={`/users/${album.user_id}`}
              className="albums-index__band albums-index__metadata"
            >
              {album.band}
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default AlbumIndex;
