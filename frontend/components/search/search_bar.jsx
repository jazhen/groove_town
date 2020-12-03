import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ users, albums, tracks, fetchAll }) => {
  const [albumSearchResults, setAlbumSearchResults] = useState([]);
  const [trackSearchResults, setTrackSearchResults] = useState([]);
  const [bandSearchResults, setBandSearchResults] = useState([]);
  const [active, setActive] = useState(false);
  const [fetched, setFetched] = useState(false);

  const updateSeachResults = (value) => {
    let numSearchResults = 0;

    const albumMatches = [];
    const albumsList = Object.values(albums);

    for (let i = 0; i < albumsList.length; i++) {
      if (numSearchResults >= 10) {
        break;
      }

      if (albumsList[i].name.toLowerCase().includes(value.toLowerCase())) {
        albumMatches.push(albumsList[i]);
        numSearchResults += 1;
      }
    }

    const trackMatches = [];

    if (numSearchResults < 10) {
      const tracksList = Object.values(tracks);
      for (let i = 0; i < tracksList.length; i++) {
        if (numSearchResults >= 10) {
          break;
        }

        if (tracksList[i].name.toLowerCase().includes(value.toLowerCase())) {
          trackMatches.push(tracksList[i]);
          numSearchResults += 1;
        }
      }
    }

    const bandMatches = [];

    if (numSearchResults < 10) {
      const usersList = Object.values(users);
      for (let i = 0; i < usersList.length; i++) {
        if (numSearchResults >= 10) {
          break;
        }

        if (
          usersList[i].band &&
          usersList[i].band.toLowerCase().includes(value.toLowerCase())
        ) {
          bandMatches.push(usersList[i]);
          numSearchResults += 1;
        }
      }
    }

    setAlbumSearchResults(albumMatches);
    setTrackSearchResults(trackMatches);
    setBandSearchResults(bandMatches);
  };

  const handleChange = (e) => {
    if (e.currentTarget.value !== '') {
      setActive(true);
      updateSeachResults(e.currentTarget.value);
    } else {
      setActive(false);
    }
  };

  const handleFocus = (e) => {
    if (!fetched) {
      fetchAll();
      setFetched(true);
    }

    if (e.currentTarget.value !== '') {
      setActive(true);
    }
  };

  const handleBlur = () => {
    setActive(false);
  };

  return (
    <div className="nav-bar__search-bar">
      <input
        className="nav-bar__search-bar-input"
        placeholder="Search and discover music"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="button" className="nav-bar__search-bar-icon">
        <i className="fas fa-search" />
      </button>
      {active ? (
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
      ) : null}
    </div>
  );
};

export default SearchBar;
