import React from 'react';
import { Link } from 'react-router-dom';

const AlbumShowDiscography = ({ albums, albumIds }) => {
  return (
    <>
      <div className="album-show-discography">
        <div className="album-show-discography__header">discography</div>
        <ul className="album-show-discography__list">
          {albumIds.map((albumId) => {
            const album = albums[albumId];
            const releaseDate = new Date(album.releaseDate);
            const dateOptions = { month: 'short', year: 'numeric' };
            const formattedDate = releaseDate.toLocaleDateString(
              'en-US',
              dateOptions
            );

            return (
              <li key={albumId} className="album-show-discography__list-item">
                <ul>
                  <li>
                    <Link
                      to={`/users/${album.userId}/albums/${album.id}`}
                      className="album-show-discography__link"
                    >
                      <img
                        src={album.artUrl}
                        alt="album art"
                        className="album-show-discography__art"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/users/${album.userId}/albums/${album.id}`}
                      className="album-show-discography__link"
                    >
                      {album.name}
                    </Link>
                  </li>
                  <li>{formattedDate}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AlbumShowDiscography;
