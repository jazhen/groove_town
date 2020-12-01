import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumCreateAlbumTab from './album_create_album_tab';
import AlbumCreateTrackTab from './album_create_track_tab';
import AlbumForm from './album_form';
import TrackForm from './track_form';

const AlbumCreate = ({ user }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [albumName, setAlbumName] = useState('');
  const [albumArtUrl, setAlbumArtUrl] = useState(null);
  const today = new Date().toISOString().slice(0, 10);
  const [albumReleaseDate, setAlbumReleaseDate] = useState(today);

  // const [albumTrackFile, setAlbumTrackFile] = useState(null);

  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Date(albumReleaseDate).toLocaleDateString(
    'en-US',
    dateOptions
  );

  const [tabs, setTabs] = useState([
    <AlbumCreateAlbumTab
      user={user}
      albumName={albumName}
      formattedDate={formattedDate}
      albumArtUrl={albumArtUrl}
      setSelectedTabIndex={setSelectedTabIndex}
    />,
  ]);

  const [tabsContent, setTabsContent] = useState([
    <AlbumForm
      albumName={albumName}
      setAlbumName={setAlbumName}
      albumArtUrl={albumArtUrl}
      setAlbumArtUrl={setAlbumArtUrl}
      albumReleaseDate={albumReleaseDate}
      setAlbumReleaseDate={setAlbumReleaseDate}
      today={today}
    />,
  ]);

  const handleTrackUpload = (e) => {
    const file = e.currentTarget.files[0];
    // setAlbumTrackFile(file);
    // debugger;
    const newTab = (
      <AlbumCreateTrackTab
        trackFileName={file.name}
        setSelectedTabIndex={setSelectedTabIndex}
        numTabs={tabs.length}
      />
    );
    tabs.push(newTab);
    setTabs(tabs);

    const newTrackForm = <TrackForm />;
    tabsContent.push(newTrackForm);
    setTabsContent(tabsContent);

    setSelectedTabIndex(tabs.length - 1);
  };

  return (
    <div className="album-create">
      <div className="album-create__tabs-container">
        <div className="album-create__tabs">
          {tabs.map((tab, index) => {
            return tabs[index];
          })}
        </div>
        <div className="album-create__options">
          <div className="album-create__options-tabs-title">TRACKS</div>
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
      <div className="album-create__active-tab">
        {tabsContent[selectedTabIndex]}
      </div>
    </div>
  );
};

export default AlbumCreate;
