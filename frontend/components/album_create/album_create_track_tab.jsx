/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCreateTrackTab = ({
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
      className={`album-create__track-tab${
        tabIndex === selectedTab ? ' album-create__active-tab' : ''
      }`}
      onClick={() => setSelectedTab(tabIndex)}
    >
      <div className="album-create__track-num">{tabIndex}</div>
      <div className="album-create__track-description">
        <div className="album-create__track-name-container">
          <div className="album-create__track-name">
            {name || 'Untitled Track'}
          </div>

          <Link
            to="#"
            className="album-create__track-delete"
            onClick={handleDelete}
          >
            <i className="fas fa-times" />
          </Link>
        </div>
        <div className="album-create__track-file-name">{fileName}</div>
      </div>
    </button>
  );
};

export default AlbumCreateTrackTab;
