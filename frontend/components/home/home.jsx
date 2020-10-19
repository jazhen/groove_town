import React from 'react';

const IndexAlbum = ({ album }) => {
  return (
    <li className="albums-list-item">
      <div className="album-container">
        <div className="album-art">
          <div className="album-art-placeholder" />
        </div>
        <ul className="album-info-list">
          <li className="album-info-list-item">
            <p className="album-name album-info-text">{album.name}</p>
          </li>
          <li className="album-info-list-item">
            <p className="album-band album-info-text">{album.band}</p>
          </li>
        </ul>
      </div>
    </li>
  );
};

class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    if (!Object.keys(this.props.albums).length) {
      return <div />;
    }

    return (
      <div className="main-container">
        <ul className="albums-list">
          {this.props.albums.map((album) => {
            return <IndexAlbum key={album.id} album={album} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
