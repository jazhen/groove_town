import React, { useEffect, useState } from 'react';

const MusicPlayer = ({ album, audio }) => {
  const [player, setPlayer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setPlayer(document.getElementById('music_player'));
  }, []);

  useEffect(() => {
    if (player) {
      player.onloadedmetadata = () => {
        setDuration(player.duration);
        setCurrentTime(player.currentTime);
      };
    }
  }, [player]);

  useEffect(() => {
    if (player) {
      player.ontimeupdate = () => {
        setDuration(player.duration);
        setCurrentTime(player.currentTime);
      };
    }
  }, [player]);

  const handlePlay = () => {
    if (playing) {
      player.pause();
      setPlaying(false);
    } else {
      player.play();
      setPlaying(true);
    }
  };

  return (
    <div className="album-player__audio-container">
      <audio
        id="music_player"
        className="album-player__audio"
        preload="metadata"
      >
        <source src={audio} type="audio/mp3" />
        <p>
          Your browser does not support the <code>audio</code> element.
        </p>
      </audio>
      <div className="album-player__play-pause-container">
        <button
          type="button"
          className={
            playing
              ? 'fas fa-pause fa-2x album-player__play-button'
              : 'fas fa-play fa-2x album-player__play-button'
          }
          onClick={handlePlay}
        />
      </div>
      <div className="album-player__main-container">
        <div className="album-player__track-info-container">
          <span className="album-player__track-name">{album.name}</span>
          <span className="album-player__track-time">
            {currentTime} / {duration}
          </span>
        </div>
        <div className="album-player__seek-container">
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            step="1"
            defaultValue="0"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
