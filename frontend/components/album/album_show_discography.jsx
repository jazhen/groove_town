import React from 'react';
import { Link } from 'react-router-dom';

const AlbumShowDiscography = ({ albums, albumIds }) => {
  return (
    <ul className="album-show-discography">
      <span>Discography</span>
      {albumIds.map((albumId) => {
        const album = albums[albumId];
        const releaseDate = new Date(album.releaseDate);
        const options = { month: 'short', year: 'numeric' };
        const formattedDate = releaseDate.toLocaleDateString('en-US', options);

        return (
          <React.Fragment key={albumId}>
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
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default AlbumShowDiscography;
