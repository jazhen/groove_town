import React from 'react';

const AlbumCreateTrackTab = ({
  name,
  fileName,
  tabIndex,
  selectedTab,
  setSelectedTab,
}) => {
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
        <div className="album-create__track-name">
          {name || 'Untitled Track'}
        </div>
        <div className="album-create__track-file-name">{fileName}</div>
      </div>
    </button>
  );
};

export default AlbumCreateTrackTab;
