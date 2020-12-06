import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumShowDiscography from './album_show_discography';
import AudioPlayer from './audio_player';

const AlbumShowAudioPlayer = ({ user, albums, tracks, albumId, sessionId }) => {
  const album = albums[albumId];

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      new Date(album.releaseDate).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    );
  }, [album.releaseDate]);

  return (
    <div className="album-player">
      <div className="album-player__container">
        <div className="album-player__art-container">
          <img
            id="album-player__art"
            className="album-player__art"
            src={album.artUrl}
            alt="album art"
          />
        </div>

        <div className="album-player__metadata">
          <div className="album-player__metadata-container">
            <span className="album-player__title">
              {album.name}
              <span className="album-player__title-nbsp">&nbsp;</span>
            </span>
            <div className="album-player__artist-container">
              <span>by&nbsp;</span>
              <Link to={`/users/${user.id}`} className="album-player__artist">
                {user.band}
              </Link>
            </div>
          </div>
          {album.trackIds.length ? (
            <AudioPlayer album={album} tracks={tracks} sessionId={sessionId} />
          ) : null}
          <p className="album-player__release-date">released {formattedDate}</p>
        </div>

        <div className="album-player__sidebar">
          <div className="album-player__artist">
            <Link to={`/users/${user.id}`}>
              <p className="album-player__artist-name">{user.band}</p>
              <img
                src={user.avatarUrl}
                alt="profile pic"
                className="album-player__artist-pic"
              />
            </Link>
          </div>
          <AlbumShowDiscography albums={albums} albumIds={user.albumIds} />
        </div>
      </div>
    </div>
  );
};

export default AlbumShowAudioPlayer;
