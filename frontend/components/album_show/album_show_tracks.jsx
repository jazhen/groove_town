import React from 'react';

// import AlbumShowTrack from './album_show_track';

const AlbumShowTrackButton = ({
  track,
  player,
  playing,
  setPlaying,
  currentTrack,
  setCurrentTrack,
  handlePlay,
}) => {
  const handleClick = () => {
    setCurrentTrack(track);
    setPlaying(true);
    player.current.pause();
    player.current.load();
    player.current.play();
  };

  return currentTrack.ord === track.ord ? (
    <button
      type="button"
      aria-label="play-audio"
      className={
        playing
          ? 'fas fa-pause album-show__track-play-button'
          : 'fas fa-play album-show__track-play-button'
      }
      onClick={handlePlay}
    />
  ) : (
    <button
      type="button"
      aria-label="play-track"
      className="fas fa-play album-show__track-play-button"
      onClick={() => handleClick(track)}
    />
  );
};

const AlbumShowTracks = ({
  trackIds,
  tracks,
  player,
  playing,
  setPlaying,
  currentTrack,
  setCurrentTrack,
  handlePlay,
  formatTime,
}) => {
  return (
    <ul>
      {trackIds.map((trackId) => {
        const track = tracks[trackId];

        return (
          <li key={trackId}>
            <ul className="album-show__track">
              <ul className="album-show__track-info-container">
                <li>
                  <AlbumShowTrackButton
                    track={track}
                    player={player}
                    playing={playing}
                    setPlaying={setPlaying}
                    currentTrack={currentTrack}
                    setCurrentTrack={setCurrentTrack}
                    handlePlay={handlePlay}
                  />
                </li>
                <li>{`${track.ord}.`}</li>
                <li className="album-show__track-name">{track.name}</li>
                <li>{formatTime(track.duration)}</li>
              </ul>
              <ul className="album-show__track-options-container">
                <li>
                  <a
                    href={track.audioUrl}
                    className="album-show__track-download"
                    download
                  >
                    download
                  </a>
                </li>
              </ul>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumShowTracks;
