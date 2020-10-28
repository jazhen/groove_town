import React, { useEffect, useState } from 'react';

const MusicPlayer = ({ album, audio }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    setPlayer(document.getElementById('music_player'));
  }, []);

  const play = () => player.play();

  return (
    <div className="album-player__audio-container">
      <audio id="music_player" className="album-player__audio">
        <source src={audio} type="audio/mp3" />
        <p>
          Your browser does not support the <code>audio</code>
          element.
        </p>
      </audio>
      <button
        type="button"
        className="fas fa-play fa-2x"
        onClick={play}
      />
      <p className="album-player__track-name">{album.name}</p>
    </div>
  );
};

export default MusicPlayer;
