import React, { useEffect, useState } from 'react';

const AlbumUpdateAlbumTab = ({
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
        className={`album-update__album-tab${
          tabIndex === selectedTab ? ' album-update__active-tab' : ''
        }`}
        onClick={() => setSelectedTab(0)}
      >
        {artUrl ? (
          <img
            className="album-update__album-tab-art
        album-update__album-tab-art--file"
            src={artUrl}
            alt="album art"
          />
        ) : (
          <div
            className="album-update__album-tab-art
        album-update__album-tab-art--empty"
          />
        )}

        <div className="album-update__album-tab-description">
          <div className="album-update__album-tab-name">
            {name || 'Untitled Album'}
          </div>
          <div className="album-update__album-tab-band">
            by&nbsp;
            <div className="album-update__album-tab-band-name">{band}</div>
          </div>
          <div className="album-update__album-tab-date">{formattedDate}</div>
        </div>
      </button>
      <div className="album-update__options-tabs-title">TRACKS</div>
    </>
  );
};

export default AlbumUpdateAlbumTab;
