import React from 'react';

const AlbumCreateAlbumTab = ({
  user,
  albumName,
  formattedDate,
  albumArtUrl,
  setSelectedTabIndex,
}) => {
  return (
    <button
      type="button"
      className="album-create__album-tab"
      onClick={() => setSelectedTabIndex(0)}
    >
      {albumArtUrl ? (
        <img
          className="album-create__album-tab-art
        album-create__album-tab-art--file"
          src={albumArtUrl}
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
          {albumName || 'Untitled Album'}
        </div>
        <div className="album-create__album-tab-band">
          by&nbsp;
          <div className="album-create__album-tab-band-name">{user.band}</div>
        </div>
        <div className="album-create__album-tab-date">{formattedDate}</div>
      </div>
    </button>
  );
};

export default AlbumCreateAlbumTab;
