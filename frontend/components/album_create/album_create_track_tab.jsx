/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCreateTrackTab = ({
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

  return (
    <button
      type="button"
      className={`album-create__track-tab${
        tabIndex === selectedTab ? ' album-create__active-tab' : ''
      }${
        trackTabErrors()
          ? ' album-create__track-tab--error'
          : ' album-create__track-tab--no-error'
      }`}
      onClick={() => setSelectedTab(tabIndex)}
    >
      <div className="album-create__track-num">{tabIndex}</div>
      <div className="album-create__track-description">
        <div className="album-create__track-name-container">
          <div className="album-create__track-name">
            {track.name || 'Untitled Track'}
          </div>

          <Link
            to="#"
            className="album-create__track-delete"
            onClick={handleDelete}
          >
            <i className="fas fa-times" />
          </Link>
        </div>
        <div className="album-create__track-file-name">
          {track.fileName} | {track.fileSize}
        </div>
        <input
          type="file"
          id={`album-create__track-replace-input-${tabIndex}`}
          className="album-create__track-replace-input"
          accept="audio/mpeg"
          onChange={handleReplace}
        />
        <label
          htmlFor={`album-create__track-replace-input-${tabIndex}`}
          className="album-create__track-replace-label"
        >
          replace
        </label>
      </div>
    </button>
  );
};

export default AlbumCreateTrackTab;
