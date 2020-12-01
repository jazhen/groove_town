import React, { useState } from 'react';
import AlbumForm from './album_form';

const AlbumCreate = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState('albumForm');
  const [albumName, setAlbumName] = useState('');
  const [albumArtUrl, setAlbumArtUrl] = useState(null);
  const today = new Date().toISOString().slice(0, 10);
  const [albumReleaseDate, setAlbumReleaseDate] = useState(today);

  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Date(albumReleaseDate).toLocaleDateString(
    'en-US',
    dateOptions
  );

  const tabs = {
    albumForm: (
      <AlbumForm
        albumName={albumName}
        setAlbumName={setAlbumName}
        albumArtUrl={albumArtUrl}
        setAlbumArtUrl={setAlbumArtUrl}
        albumReleaseDate={albumReleaseDate}
        setAlbumReleaseDate={setAlbumReleaseDate}
        today={today}
      />
    ),
    // product: <Product />,
    // contact: <Contact />,
  };

  return (
    <div className="album-create">
      <div className="album-create__tabs">
        <button
          type="button"
          className="album-create__album-tab"
          onClick={() => setSelectedTab('albumForm')}
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
            <div>{albumName || 'Untitled Album'}</div>
            <div>by {user.band}</div>
            <div>{formattedDate}</div>
          </div>
        </button>
        <button type="button" onClick={() => setSelectedTab('albumForm')}>
          albumForm
        </button>
        <button type="button" onClick={() => setSelectedTab('albumForm')}>
          albumForm
        </button>
      </div>
      <div className="album-create__active-tab">{tabs[selectedTab]}</div>
    </div>
  );
};

export default AlbumCreate;
