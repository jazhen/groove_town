import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumCreateAlbumTab from './album_create_album_tab';
import AlbumCreateTrackTab from './album_create_track_tab';
import AlbumForm from './album_form';
import TrackForm from './track_form';

const AlbumCreate = ({ user }) => {
  const today = new Date().toISOString().slice(0, 10);

  // const [album, setAlbum] = useState({ name: '' });
  const [tracks, setTracks] = useState([]);

  const [album, setAlbum] = useState({
    name: '',
    releaseDate: today,
    artFile: null,
    artUrl: null,
  });

  const [selectedTab, setSelectedTab] = useState(0);

  const [tabs, setTabs] = useState([
    <AlbumCreateAlbumTab
      band={user.band}
      name={album.name}
      setSelectedTab={setSelectedTab}
    />,
  ]);

  const [tabsContent, setTabsContent] = useState([
    <AlbumForm album={album} setAlbum={setAlbum} />,
  ]);

  useEffect(() => {
    const updatedTabs = [
      <AlbumCreateAlbumTab
        band={user.band}
        name={album.name}
        artUrl={album.artUrl}
        releaseDate={album.releaseDate}
        setSelectedTab={setSelectedTab}
      />,
    ];

    for (let i = 0; i < tabs.length - 1; i++) {
      updatedTabs.push(
        <AlbumCreateTrackTab
          name={tracks[i].name}
          tracks={tracks}
          fileName={tracks[i].fileName}
          tabIndex={i + 1}
          setSelectedTab={setSelectedTab}
        />
      );
    }

    setTabs(updatedTabs);
  }, [user, album, tracks, tabs.length]);

  useEffect(() => {
    const updatedTabsContent = [
      <AlbumForm album={album} setAlbum={setAlbum} today={today} />,
    ];

    for (let i = 0; i < tabs.length - 1; i++) {
      updatedTabsContent.push(
        <TrackForm
          name={tracks[i].name}
          tracks={tracks}
          setTracks={setTracks}
          tabIndex={i}
        />
      );
    }

    setTabsContent(updatedTabsContent);
  }, [album, tracks, tabs.length, today]);

  const handleTrackUpload = (e) => {
    const file = e.currentTarget.files[0];

    const newTracks = [...tracks, { name: '', fileName: file.name }];
    setTracks(newTracks);

    const newTab = (
      <AlbumCreateTrackTab
        name=""
        tracks={newTracks}
        fileName={file.name}
        tabIndex={tabs.length}
        setSelectedTab={setSelectedTab}
      />
    );
    setTabs([...tabs, newTab]);

    const newTrackForm = (
      <TrackForm
        name=""
        tracks={newTracks}
        setTracks={setTracks}
        tabIndex={tabs.length - 1}
      />
    );

    setSelectedTab(tabs.length);
    setTabsContent([...tabsContent, newTrackForm]);
  };

  return (
    <div className="album-create">
      <div className="album-create__tabs-container">
        <div className="album-create__tabs">
          {tabs.map((tab, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <React.Fragment key={index}>{tabs[index]}</React.Fragment>;
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
      <div className="album-create__active-tab">{tabsContent[selectedTab]}</div>
    </div>
  );
};

export default AlbumCreate;
