import React from 'react';

const AlbumShowTrack = ({ track }) => {
  return (
    <ul className="album-show__track">
      <li>
        <button
          type="button"
          aria-label="play-track"
          className="fas fa-play album-player__play-button"
        />
      </li>
      <li className="album-show__track-ord">{`${track.ord}.`}</li>
      <li className="album-show__track-name">{track.name}</li>
      <li>3:23</li>
    </ul>
  );
};

export default AlbumShowTrack;
