import React from 'react';
import { Link } from 'react-router-dom';

const AlbumShowDiscography = ({ albums, albumIds }) => {
  // debugger;

  return (
    <>
      <div className="album-show-discography">
        <p className="album-show-discography__header">discography</p>
        <ul className="album-show-discography__list">
          {albumIds.map((albumId) => {
            const album = albums[albumId];
            const releaseDate = new Date(album.releaseDate);
            const formattedDate = releaseDate.toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            });

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
