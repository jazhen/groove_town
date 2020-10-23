import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShowMusic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, albums, albumId } = this.props;

    if (!user) {
      return null;
    }

    const album = albums[albumId];

    return (
      <div className="album-player">
        <div className="album-player__art-container">
          <img
            id="album-player__art"
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
          <div className="album-player__audio-container">
            <audio controls src="">
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </div>
        <div className="album-player__sidebar">
          <span className="album-player__artist-name">
            <Link to={`/users/${user.id}`}>{user.band}</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default AlbumShowMusic;
