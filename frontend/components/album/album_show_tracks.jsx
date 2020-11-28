import React from 'react';
// import AlbumShowTrack from './album_show_track';

const AlbumShowTracks = ({
  album,
  tracks,
  player,
  playing,
  currentTrack,
  setCurrentTrack,
  handlePlay,
}) => {
  const handleClick = (track) => {
    setCurrentTrack(track);
    player.current.pause();
    player.current.load();
    player.current.play();
  };

  return (
    <ul>
      {album.trackIds.map((trackId) => {
        const track = tracks[trackId];
        return (
          <li key={trackId}>
            {/* <AlbumShowTrack track={tracks[trackId]} /> */}
            <ul className="album-show__track">
              <li>
                {currentTrack.ord === track.ord ? (
                  <button
                    type="button"
                    aria-label="play-audio"
                    className={
                      playing
                        ? 'fas fa-pause album-player__play-button'
                        : 'fas fa-play album-player__play-button'
                    }
                    onClick={handlePlay}
                  />
                ) : (
                  <button
                    type="button"
                    aria-label="play-track"
                    className="fas fa-play album-player__play-button"
                    onClick={() => handleClick(track)}
                  />
                )}
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
