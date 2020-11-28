import React from 'react';
// import AlbumShowTrack from './album_show_track';

const AlbumShowTracks = ({ album, tracks, player, setCurrentTrack }) => {
  const handleClick = (track) => {
    setCurrentTrack(track);
    player.current.pause();
    player.current.load();
    player.current.play();
  };

  return (
    <ul>
      {album.trackIds.map((trackId) => (
        <li key={trackId}>
          {/* <AlbumShowTrack track={tracks[trackId]} /> */}
          <ul className="album-show__track">
            <li>
              <button
                type="button"
                aria-label="play-track"
                className="fas fa-play album-player__play-button"
                onClick={() => handleClick(tracks[trackId])}
              />
            </li>
            <li className="album-show__track-ord">{`${tracks[trackId].ord}.`}</li>
            <li className="album-show__track-name">{tracks[trackId].name}</li>
            <li>3:23</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default AlbumShowTracks;
