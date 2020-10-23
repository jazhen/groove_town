import React from 'react';
import { Link } from 'react-router-dom';

export const IndexAlbum = ({ album }) => {
  return (
    <li className="albums-index__list-item">
      <div className="albums-index__album-container">
        <div className="albums-index__album-art-container">
          <Link
            to={`/users/${album.user_id}/albums/${album.id}`}
            className="albums-index__album-name albums-index__metadata">
            <div className="albums-index__album-art-container">
              {album.photoUrl ? (
                <img
                  className="albums-index__album-art"
                  src={album.photoUrl}
                  alt={`${album.band}-${album.name}`}
                />
              ) : (
                ''
              )}
            </div>
          </Link>
        </div>
        <ul className="albums-index__metadata-list">
          <li className="albums-index__metadata-list-item">
            <Link
              to={`/users/${album.user_id}/albums/${album.id}`}
              className="albums-index__album-name albums-index__metadata">
              {album.name}
            </Link>
          </li>
          <li className="albums-index__metadata-list-item">
            <Link
              to={`/users/${album.user_id}`}
              className="albums-index__band albums-index__metadata">
              {album.band}
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

class Splash extends React.Component {
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
                <Link
                  to="/users/10/albums/12"
                  className="albums-index__carousel-link">
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
                  className="albums-index__carousel-link">
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
                  className="albums-index__carousel-link">
                  <img
                    className="albums-index__carousel-sub-img"
                    src="https://groove-town-seeds.s3-us-west-1.amazonaws.com/splash/splash-sub_2.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="albums-index__carousel-sub-img-container">
                <Link
                  to="/users/20/albums/29"
                  className="albums-index__carousel-link">
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
          {albums.map((album) => {
            return <IndexAlbum key={album.id} album={album} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Splash;
