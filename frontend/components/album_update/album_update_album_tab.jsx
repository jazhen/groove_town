import React, { useEffect, useState } from 'react';

const AlbumUpdateAlbumTab = ({
  band,
  album,
  tabIndex,
  selectedTab,
  setSelectedTab,
  errors,
}) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (album) {
      setFormattedDate(
        new Date(album.releaseDate).toLocaleDateString('en-US', {
          timeZone: 'UTC',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      );
    }
  }, [album]);

  if (!album) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className={`album-update__album-tab${
          tabIndex === selectedTab ? ' album-update__active-tab' : ''
        }${
          errors.name || errors.art
            ? ' album-update__album-tab--error'
            : ' album-update__album-tab--no-error'
        }`}
        onClick={() => setSelectedTab(0)}
      >
        {album.artUrl ? (
          <img
            className="album-update__album-tab-art
        album-update__album-tab-art--file"
            src={album.artUrl}
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
            {album.name || 'Untitled Album'}
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
