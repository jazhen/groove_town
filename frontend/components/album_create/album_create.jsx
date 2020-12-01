import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleTrackUpload = () => {};

  return (
    <div className="album-create">
      <div className="album-create__tabs-container">
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
              <div className="album-create__album-tab-name">
                {albumName || 'Untitled Album'}
              </div>
              <div className="album-create__album-tab-band">
                by&nbsp;
                <div className="album-create__album-tab-band-name">
                  {user.band}
                </div>
              </div>
              <div className="album-create__album-tab-date">
                {formattedDate}
              </div>
            </div>
          </button>
          <button type="button" onClick={() => setSelectedTab('albumForm')}>
            albumForm
          </button>
          <button type="button" onClick={() => setSelectedTab('albumForm')}>
            albumForm
          </button>
        </div>
        <div className="album-create__options">
          <div className="album-create__options-tabs-title">TRACKS</div>

          {/* <div className="album-create__options-add-track">
            <div className="album-create__options-add-track-input">
              add track
            </div>
            <div className="album-create__options-add-track-description">
              291MB max per track, lossless .wav, .aif or .flac
            </div>
          </div> */}

          <div className="album-create__options-add-track">
            <input
              type="file"
              id="album-create__options-add-track-input"
              className="album-create__options-add-track-input"
              accept="audio/mpeg"
              onChange={handleTrackUpload}
            />
            <label
              htmlFor="album-create__options-add-track-input"
              className="album-create__options-add-track-label"
            >
              add track
            </label>
            <div className="album-create__options-add-track-description">
              291MB max per track, lossless .wav, .aif or .flac
            </div>
          </div>

          <div className="album-create__options-publish-container">
            <button type="button" className="album-create__options-publish">
              Publish
            </button>
            <Link to="/" className="album-create__options-cancel">
              cancel
            </Link>
          </div>
        </div>
      </div>
      <div className="album-create__active-tab">{tabs[selectedTab]}</div>
    </div>
  );
};

export default AlbumCreate;
