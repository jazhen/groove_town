import React, { useEffect, useState } from 'react';

const AlbumCreateAlbumTab = ({
  band,
  album,
  tabIndex,
  selectedTab,
  setSelectedTab,
  errors,
}) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      new Date(album.releaseDate).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    );
  }, [album.releaseDate]);

  return (
    <>
      <button
        type="button"
        className={`album-create__album-tab${
          tabIndex === selectedTab ? ' album-create__active-tab' : ''
        }${
          errors.name || errors.art
            ? ' album-create__album-tab--error'
            : ' album-create__album-tab--no-error'
        }`}
        onClick={() => setSelectedTab(0)}
      >
        {album.artUrl ? (
          <img
            className="album-create__album-tab-art
              album-create__album-tab-art--file"
            src={album.artUrl}
            alt="album art"
          />
        ) : (
          <div
            className="album-create__album-tab-art
              album-create__album-tab-art--empty"
          />
        )}

        <div className="album-create__album-tab-description">
          <p className="album-create__album-tab-name">
            {album.name || 'Untitled Album'}
          </p>
          <div className="album-create__album-tab-band">
            by&nbsp;
            <p className="album-create__album-tab-band-name">{band}</p>
          </div>
          <p className="album-create__album-tab-date">{formattedDate}</p>
        </div>
      </button>
      <p className="album-create__options-tabs-title">TRACKS</p>
    </>
  );
};

export default AlbumCreateAlbumTab;
