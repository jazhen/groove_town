import React from 'react';

class AlbumShowMusic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    const { user, albums, albumId } = this.props;

    if (!user) {
      return null;
    }

    const album = albums[albumId];

    return (
      <div div className="album-player">
        <div className="album-player__art-container">
          <img
            className="album-player__art"
            src={albums[albumId].photoUrl}
            alt=""
          />
        </div>
        <div className="album-player__metadata">
          <span className="album-player__title">{album.name}</span>
          <span className="album-player__artist-container">
            <span> by </span>
            <span className="album-player__artist">{user.band}</span>
          </span>
          {/* <div className="album-player__audio-container"> */}
          <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          {/* </div> */}
        </div>
        <div className="album-player__sidebar">
          <span className="album-player__artist-name">{user.band}</span>
        </div>
      </div>
    );
  }
}

export default AlbumShowMusic;
