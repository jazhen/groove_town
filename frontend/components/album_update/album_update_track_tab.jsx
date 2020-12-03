/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const AlbumUpdateTrackTab = ({
  name,
  fileName,
  tracks,
  setTracks,
  tabIndex,
  tabs,
  setTabs,
  selectedTab,
  setSelectedTab,
}) => {
  const handleDelete = () => {
    const tabsCopy = tabs;
    tabsCopy.splice(tabIndex, 1);
    setTabs(tabsCopy);

    const tracksCopy = tracks;
    tracksCopy.splice(tabIndex - 1, 1);
    setTracks(tracksCopy);
  };

  return (
    <button
      type="button"
      className={`album-update__track-tab${
        tabIndex === selectedTab ? ' album-update__active-tab' : ''
      }`}
      onClick={() => setSelectedTab(tabIndex)}
    >
      <div className="album-update__track-num">{tabIndex}</div>
      <div className="album-update__track-description">
        <div className="album-update__track-name-container">
          <div className="album-update__track-name">
            {name || 'Untitled Track'}
          </div>

          <Link
            to="#"
            className="album-update__track-delete"
            onClick={handleDelete}
          >
            <i className="fas fa-times" />
          </Link>
        </div>
        <div className="album-update__track-file-name">{fileName}</div>
      </div>
    </button>
  );
};

export default AlbumUpdateTrackTab;
