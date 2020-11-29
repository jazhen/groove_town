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
}) => {
  return (
    <ul>
      {trackIds.map((trackId) => {
        const track = tracks[trackId];

        return (
          <li key={trackId}>
            {/* <AlbumShowTrack track={tracks[trackId]} /> */}
            <ul className="album-show__track">
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
              <li className="album-show__track-ord">{`${track.ord}.`}</li>
              <li className="album-show__track-name">{track.name}</li>
              <li>3:23</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumShowTracks;
