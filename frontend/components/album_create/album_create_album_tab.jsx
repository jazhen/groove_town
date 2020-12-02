import React, { useEffect, useState } from 'react';

const AlbumCreateAlbumTab = ({
  band,
  name,
  artUrl,
  releaseDate,
  tabIndex,
  selectedTab,
  setSelectedTab,
}) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      new Date(releaseDate).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    );
  }, [releaseDate]);

  return (
    <>
      <button
        type="button"
        className={`album-create__album-tab${
          tabIndex === selectedTab ? ' album-create__active-tab' : ''
        }`}
        onClick={() => setSelectedTab(0)}
      >
        {artUrl ? (
          <img
            className="album-create__album-tab-art
        album-create__album-tab-art--file"
            src={artUrl}
            alt="album art"
          />
        ) : (
          <div
            className="album-create__album-tab-art
        album-create__album-tab-art--empty"
          />
        )}

        <div className="album-create__album-tab-description">
          <div className="album-create__album-tab-name">
            {name || 'Untitled Album'}
          </div>
          <div className="album-create__album-tab-band">
            by&nbsp;
            <div className="album-create__album-tab-band-name">{band}</div>
          </div>
          <div className="album-create__album-tab-date">{formattedDate}</div>
        </div>
      </button>
      <div className="album-create__options-tabs-title">TRACKS</div>
    </>
  );
};

export default AlbumCreateAlbumTab;
