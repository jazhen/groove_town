import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumCreateAlbumTab from './album_create_album_tab';
import AlbumCreateTrackTab from './album_create_track_tab';
import AlbumForm from './album_form';
import TrackForm from './track_form';

const AlbumCreate = ({ user }) => {
  const today = new Date().toISOString().slice(0, 10);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [album, setAlbum] = useState({
    name: '',
    releaseDate: today,
    artFile: null,
    artUrl: null,
  });

  const [tabs, setTabs] = useState([]);
  const [tabsContent, setTabsContent] = useState([]);

  useEffect(() => {
    setTabs([
      <AlbumCreateAlbumTab
        user={user}
        albumName={album.name}
        albumArtUrl={album.artUrl}
        albumReleaseDate={album.releaseDate}
        // formattedDate={formattedDate}
        // setSelectedTabIndex={setSelectedTabIndex}
      />,
    ]);
    setTabsContent([
      <AlbumForm
        // albumName={albumName}
        // setAlbumName={setAlbumName}
        // albumArtUrl={albumArtUrl}
        // setAlbumArtUrl={setAlbumArtUrl}
        // albumReleaseDate={albumReleaseDate}
        // setAlbumReleaseDate={setAlbumReleaseDate}
        album={album}
        setAlbum={setAlbum}
        today={today}
        // handleAlbumNameChange={handleAlbumNameChange}
      />,
    ]);
  }, [user, album, today]);

  const handleTrackUpload = (e) => {
    const file = e.currentTarget.files[0];
    // ATrackFile(file);
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

  console.log(album);

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
