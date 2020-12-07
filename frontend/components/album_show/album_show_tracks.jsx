import React from 'react';

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
  sessionId,
}) => {
  return (
    <ul className="album-show__tracks">
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
                <li className="album-show__track-name">
                  <span className="album-show__track-name-span">
                    {track.name}
                  </span>
                  {formatTime(track.duration)}
                </li>
              </ul>
              <ul className="album-show__track-options-container">
                {sessionId ? (
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={track.audioUrl}
                      className="album-show__track-download"
                      type="audio/mpeg"
                      download
                    >
                      download
                    </a>
                  </li>
                ) : null}
              </ul>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumShowTracks;
