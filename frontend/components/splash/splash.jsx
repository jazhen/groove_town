import React from 'react';
import { Link } from 'react-router-dom';
import IndexAlbum from './album_index';

class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums } = this.props;
    const albumIds = Object.keys(albums);

    if (!albumIds.length) {
      return null;
    }

    return (
      <div className="albums-index">
        <div className="albums-index__carousel">
          <div className="albums-index__carousel-container">
            <div className="albums-index__carousel-main albums-index__carousel-col">
              <div className="albums-index__carousel-main-img-container">
                <Link
                  to="/users/10/albums/12"
                  className="albums-index__carousel-link"
                >
                  <img
                    className="albums-index__carousel-main-img"
                    src="https://groove-town-seeds.s3-us-west-1.amazonaws.com/splash/splash-main.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="albums-index__carousel-sub albums-index__carousel-col">
              <div className="albums-index__carousel-sub-img-container">
                <Link
                  to="/users/19/albums/27"
                  className="albums-index__carousel-link"
                >
                  <img
                    className="albums-index__carousel-sub-img"
                    src="https://groove-town-seeds.s3-us-west-1.amazonaws.com/splash/splash-sub_1.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="albums-index__carousel-sub-img-container">
                <Link
                  to="/users/20/albums/28"
                  className="albums-index__carousel-link"
                >
                  <img
                    className="albums-index__carousel-sub-img"
                    src="https://groove-town-seeds.s3-us-west-1.amazonaws.com/splash/splash-sub_2.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="albums-index__carousel-sub-img-container">
                <Link
                  to="/users/21/albums/29"
                  className="albums-index__carousel-link"
                >
                  <img
                    className="albums-index__carousel-sub-img"
                    src="https://groove-town-seeds.s3-us-west-1.amazonaws.com/splash/splash-sub_3.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ul className="albums-index__list">
          {albumIds.map((albumId) => {
            return <IndexAlbum key={albumId} album={albums[albumId]} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Splash;
