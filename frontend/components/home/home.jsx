import React from 'react';

export const IndexAlbum = ({ album }) => {
  return (
    <li className="albums-index__list-item">
      <div className="albums-index__album-container">
        <div className="albums-index__album-art-container">
          <a className="albums-index__album-link">
            <div className="albums-index__album-art-placeholder" />
          </a>
        </div>
        <ul className="albums-index__metadata-list">
          <li className="albums-index__metadata-list-item">
            <a
              className="albums-index__album-name albums-index__metadata"
              href="#">
              {album.name}
            </a>
          </li>
          <li className="albums-index__metadata-list-item">
            <a className="albums-index__band albums-index__metadata" href="#">
              {album.band}
            </a>
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

    if (!albums.length) {
      return null;
    }

    return (
      <div className="albums-index">
        <div className="albums-index__carousel">
          <div className="albums-index__carousel-container">
            <div className="albums-index__carousel-main albums-index__carousel-col">
              <div className="albums-index__carousel-main-img-container">
                <a className="albums-index__carousel-link" href="#">
                  <img
                    className="albums-index__carousel-main-img"
                    src="https://wmscradio.com/wp-content/uploads/sites/4/2018/11/The-Low-End-Theory-by-A-Tribe-Called-Quest.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="albums-index__carousel-sub albums-index__carousel-col">
              <div className="albums-index__carousel-sub-img-container">
                <a className="albums-index__carousel-link" href="#">
                  <img
                    className="albums-index__carousel-sub-img"
                    src="https://cdn4.pitchfork.com/longform/867/Merriweather10.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="albums-index__carousel-sub-img-container">
                <a className="albums-index__carousel-link" href="#">
                  <img
                    className="albums-index__carousel-sub-img"
                    src="https://cdn2.pitchfork.com/longform/734/Boards-of-Canada.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="albums-index__carousel-sub-img-container">
                <a className="albums-index__carousel-link" href="#">
                  <img
                    className="albums-index__carousel-sub-img"
                    src="https://www.nme.com/wp-content/uploads/2020/10/Leon-Bridges-Lucky-Dayes@2000x1270-696x442.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
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
