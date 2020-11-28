import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './audio_player';

const AlbumShowAudioPlayer = ({ user, albums, albumId }) => {
  const album = albums[albumId];

  if (!user) {
    return null;
  }
  return (
    <div className="album-player">
      <div className="album-player__art-container">
        <img
          id="album-player__art"
          className="album-player__art"
          src={albums[albumId].artUrl}
          alt=""
        />
      </div>
      <div className="album-player__metadata">
        <span className="album-player__title">{album.name}</span>
        <span className="album-player__artist-container">
          <span> by </span>
          <span className="album-player__artist">
            <Link to={`/users/${user.id}`}>{user.band}</Link>
          </span>
        </span>
        <AudioPlayer
          album={album}
          audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
        />
      </div>
      <div className="album-player__sidebar">
        <span className="album-player__artist-name">
          <Link to={`/users/${user.id}`}>{user.band}</Link>
        </span>
      </div>
    </div>
  );
};

export default AlbumShowAudioPlayer;
