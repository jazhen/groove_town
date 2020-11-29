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
          <>
            <li>
              <Link to={`/users/${album.userId}/albums/${album.id}`}>
                <img
                  src={album.artUrl}
                  alt="album art"
                  className="album-show-discography__art"
                />
              </Link>
            </li>
            <li>
              <Link to={`/users/${album.userId}/albums/${album.id}`}>
                {album.name}
              </Link>
            </li>
            <li>{formattedDate}</li>
          </>
        );
      })}
    </ul>
  );
};

export default AlbumShowDiscography;
