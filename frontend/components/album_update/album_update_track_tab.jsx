/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const AlbumUpdateTrackTab = ({
  track,
  tabIndex,
  selectedTab,
  setSelectedTab,
  handleTrackDelete,
  handleTrackReplace,
  errors,
}) => {
  const handleDelete = () => {
    handleTrackDelete(tabIndex);
  };

  const handleReplace = (e) => {
    handleTrackReplace(tabIndex - 1, e.currentTarget.files[0]);
  };

  const trackTabErrors = () => {
    return (
      (errors[`tracks[${tabIndex - 1}].errors`] &&
        errors[`tracks[${tabIndex - 1}].errors`].length) ||
      (errors[`tracks[${tabIndex - 1}].name`] &&
        errors[`tracks[${tabIndex - 1}].name`].length)
    );
  };

  if (!track) {
    return null;
  }

  return (
    <button
      type="button"
      className={`album-update__track-tab${
        tabIndex === selectedTab ? ' album-update__active-tab' : ''
      }${
        trackTabErrors()
          ? ' album-update__track-tab--error'
          : ' album-update__track-tab--no-error'
      }`}
      onClick={() => setSelectedTab(tabIndex)}
    >
      <div className="album-update__track-num">{tabIndex}</div>
      <div className="album-update__track-description">
        <div className="album-update__track-name-container">
          <div className="album-update__track-name">
            {track.name || 'Untitled Track'}
          </div>

          <Link
            to="#"
            className="album-update__track-delete"
            onClick={handleDelete}
          >
            <i className="fas fa-times" />
          </Link>
        </div>
        <div className="album-update__track-file-name">
          {track.audioFileName} | {`${track.audioFileSize.toFixed(2)} MB`}
        </div>
        <input
          type="file"
          id={`album-update__track-replace-input-${tabIndex}`}
          className="album-update__track-replace-input"
          accept="audio/mpeg"
          onChange={handleReplace}
        />
        <label
          htmlFor={`album-update__track-replace-input-${tabIndex}`}
          className="album-update__track-replace-label"
        >
          replace
        </label>
      </div>
    </button>
  );
};

export default AlbumUpdateTrackTab;
