import React from 'react';

const IndexAlbum = ({ album }) => {
  return (
    <li className="albums-index__list-item">
      <div className="albums-index__album-container">
        <div className="albums-index__album-art-container">
          <div className="albums-index__album-art-placeholder" />
        </div>
        <ul className="albums-index__metadata-list">
          <li className="albums-index__metadata-list-item">
            <p className="albums-index__album-name albums-index__metadata">
              {album.name}
            </p>
          </li>
          <li className="albums-index__metadata-list-item">
            <p className="albums-index__band albums-index__metadata">
              {album.band}
            </p>
          </li>
        </ul>
      </div>
    </li>
  );
};

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums } = this.props;

    if (!Object.keys(albums).length) {
      return null;
    }

    return (
      <div className="albums-index">
        <div className="albums-index__carousel">
          <div className="column column1">
            <img
              className="img0"
              src="https://f4.bcbits.com/img/0022029290_171.jpg"
              alt=""
            />
          </div>
          <div className="column column2">
            <img
              className="img1"
              src="https://f4.bcbits.com/img/0022015622_170.jpg"
              alt=""
            />
            <img
              className="img2"
              src="https://f4.bcbits.com/img/0021997335_170.jpg"
              alt=""
            />
            <img
              className="img3"
              src="https://f4.bcbits.com/img/0021991804_170.jpg"
              alt=""
            />
          </div>
        </div>
        <ul className="albums-index__list">
          {albums.map((album) => {
            return <IndexAlbum key={album.id} album={album} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
