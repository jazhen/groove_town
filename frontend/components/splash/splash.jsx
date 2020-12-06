import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IndexAlbum from './album_index';
import Loading from '../loading/loading';

const Splash = ({ albums, albumIds, fetchAlbums, loading }) => {
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  if (loading) {
    return <Loading />;
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
                  src="https://groove-town-seeds.s3-us-west-1.amazonaws.com/splash/splash-main.jpg"
                  alt="splash main"
                />
                <p className="albums-index__carousel-main-description">
                  listen now
                </p>
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
                  alt="splash sub 1"
                />
                <p className="albums-index__carousel-sub-description">
                  listen now
                </p>
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
                  alt="splash sub 2"
                />
                <p className="albums-index__carousel-sub-description">
                  listen now
                </p>
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
                  alt="splash sub 3"
                />
                <p className="albums-index__carousel-sub-description">
                  listen now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="albums-index__notification">
        Fans have streamed songs for&nbsp;
        <span className="albums-index__notification-bold">
          274 million&nbsp;
        </span>
        hours using groovetown, and&nbsp;
        <span className="albums-index__notification-bold">
          31 million&nbsp;
        </span>
        hours in the last 30 days alone.
      </div>
      <p className="albums-index__new-and-notable">New and Notable</p>
      <ul className="albums-index__list">
        {albumIds.map((albumId) => {
          return <IndexAlbum key={albumId} album={albums[albumId]} />;
        })}
      </ul>
    </div>
  );
};

export default Splash;
