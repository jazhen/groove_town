import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ users, albums, tracks, fetchAll }) => {
  const [albumSearchResults, setAlbumSearchResults] = useState([]);
  const [trackSearchResults, setTrackSearchResults] = useState([]);
  const [bandSearchResults, setBandSearchResults] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const updateSeachResults = (value) => {
    const albumResults = Object.values(albums).filter((album) =>
      album.name.toLowerCase().includes(value.toLowerCase())
    );

    setAlbumSearchResults(albumResults);

    const trackResults = Object.values(tracks).filter((track) =>
      track.name.toLowerCase().includes(value.toLowerCase())
    );

    setTrackSearchResults(trackResults);

    const bandResults = Object.values(users).filter(
      (user) =>
        user.band && user.band.toLowerCase().includes(value.toLowerCase())
    );

    setBandSearchResults(bandResults);
  };

  const handleChange = (e) => {
    updateSeachResults(e.currentTarget.value);
  };

  return (
    <div className="nav-bar__search-bar">
      <input
        className="nav-bar__search-bar-input"
        placeholder="Search and discover music"
        onChange={handleChange}
      />
      <button type="button" className="nav-bar__search-bar-icon">
        <i className="fas fa-search" />
      </button>
      <ul className="nav-bar__search-bar-results-list">
        {albumSearchResults.map((album) => {
          return (
            <Link
              to={`/users/${album.userId}/albums/${album.id}`}
              key={album.id}
            >
              <li className="nav-bar__search-bar-results-list-item">
                <img
                  className="nav-bar__search-bar-results-album-img"
                  src={album.artUrl}
                  alt="album art"
                />
                <ul className="nav-bar__search-bar-results-data-list">
                  <li
                    className="nav-bar__search-bar-results-data-list-item
                      nav-bar__search-bar-results-list-item--bold"
                  >
                    {album.name}
                  </li>
                  <li className="nav-bar__search-bar-results-data-list-item">
                    by {album.band}
                  </li>
                  <li className="nav-bar__search-bar-results-data-list-item">
                    ALBUM
                  </li>
                </ul>
              </li>
            </Link>
          );
        })}
        {trackSearchResults.map((track) => {
          return (
            <Link
              to={`/users/${track.userId}/albums/${track.albumId}`}
              key={track.id}
            >
              <li className="nav-bar__search-bar-results-list-item">
                <img
                  className="nav-bar__search-bar-results-album-img"
                  src={albums[track.albumId].artUrl}
                  alt="track album art"
                />
                <ul className="nav-bar__search-bar-results-data-list">
                  <li
                    className="nav-bar__search-bar-results-data-list-item
                      nav-bar__search-bar-results-list-item--bold"
                  >
                    {track.name}
                  </li>
                  <li className="nav-bar__search-bar-results-data-list-item">
                    by {track.band}
                  </li>
                  <li className="nav-bar__search-bar-results-data-list-item">
                    TRACK
                  </li>
                </ul>
              </li>
            </Link>
          );
        })}
        {bandSearchResults.map((user) => {
          return (
            <Link to={`/users/${user.id}`} key={user.id}>
              <li className="nav-bar__search-bar-results-list-item">
                <img
                  className="nav-bar__search-bar-results-album-img"
                  src={albums[1].artUrl}
                  alt="track album art"
                />
                <ul className="nav-bar__search-bar-results-data-list">
                  <li
                    className="nav-bar__search-bar-results-data-list-item
                      nav-bar__search-bar-results-list-item--bold"
                  >
                    {user.band}
                  </li>
                  <li className="nav-bar__search-bar-results-data-list-item">
                    BAND
                  </li>
                </ul>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
