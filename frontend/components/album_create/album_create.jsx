import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumCreateAlbumTab from './album_create_album_tab';
import AlbumCreateTrackTab from './album_create_track_tab';
import AlbumCreateAlbumForm from './album_create_album_form';
import AlbumCreateTrackForm from './album_create_track_form';

const AlbumCreate = ({ user, createAlbum, albumErrors, clearAlbumErrors }) => {
  const today = new Date().toISOString().slice(0, 10);

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
      tabIndex={0}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    />,
  ]);

  const [tabsContent, setTabsContent] = useState([
    <AlbumCreateAlbumForm
      album={album}
      setAlbum={setAlbum}
      errors={albumErrors}
      clearAlbumErrors={clearAlbumErrors}
    />,
  ]);

  useEffect(() => {
    const updatedTabs = [
      <AlbumCreateAlbumTab
        band={user.band}
        name={album.name}
        artUrl={album.artUrl}
        releaseDate={album.releaseDate}
        tabIndex={0}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />,
    ];

    for (let i = 0; i < tabs.length - 1; i++) {
      updatedTabs.push(
        <AlbumCreateTrackTab
          name={tracks[i].name}
          tracks={tracks}
          setTracks={setTracks}
          fileName={tracks[i].fileName}
          tabIndex={i + 1}
          tabs={tabs}
          setTabs={setTabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      );
    }

    setTabs(updatedTabs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, album, tracks, tabs.length, selectedTab]);

  useEffect(() => {
    const updatedTabsContent = [
      <AlbumCreateAlbumForm
        album={album}
        setAlbum={setAlbum}
        today={today}
        errors={albumErrors}
        clearAlbumErrors={clearAlbumErrors}
      />,
    ];

    for (let i = 0; i < tabs.length - 1; i++) {
      updatedTabsContent.push(
        <AlbumCreateTrackForm
          name={tracks[i].name}
          tracks={tracks}
          setTracks={setTracks}
          tabIndex={i}
          errors={albumErrors}
          clearAlbumErrors={clearAlbumErrors}
        />
      );
    }

    setTabsContent(updatedTabsContent);
  }, [album, tracks, tabs.length, today, albumErrors, clearAlbumErrors]);

  const handleTrackUpload = (e) => {
    const file = e.currentTarget.files[0];

    const newTracks = [
      ...tracks,
      { name: '', fileName: file.name, audioFile: file },
    ];
    setTracks(newTracks);

    const newTab = (
      <AlbumCreateTrackTab
        name=""
        tracks={newTracks}
        setTracks={setTracks}
        fileName={file.name}
        tabIndex={tabs.length}
        tabs={tabs}
        setTabs={setTabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    );
    setTabs([...tabs, newTab]);

    const newTrackForm = (
      <AlbumCreateTrackForm
        name=""
        tracks={newTracks}
        setTracks={setTracks}
        tabIndex={tabs.length - 1}
        errors={albumErrors}
        clearAlbumErrors={clearAlbumErrors}
      />
    );

    setSelectedTab(tabs.length);
    setTabsContent([...tabsContent, newTrackForm]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('album[name]', album.name);
    formData.append('album[user_id]', user.id);
    formData.append('album[release_date]', album.releaseDate);
    if (album.artFile) {
      formData.append('album[art]', album.artFile);
    }

    tracks.forEach((track, ord) => {
      formData.append(`album[tracks_attributes][${ord}][name]`, track.name);
      formData.append(`album[tracks_attributes][${ord}][ord]`, ord + 1);
      formData.append(`album[tracks_attributes][${ord}][user_id]`, user.id);
      formData.append(`album[tracks_attributes][${ord}][album_id]`, 1);
      formData.append(`album[tracks_attributes][${ord}][duration]`, '1:23');
      formData.append(
        `album[tracks_attributes][${ord}][audio]`,
        track.audioFile
      );
    });

    createAlbum(formData);
  };

  return (
    <div className="album-create">
      <form className="album-create__form" onSubmit={handleSubmit}>
        <div className="album-create__tabs-container">
          <div className="album-create__tabs">
            {tabs.map((tab, index) => {
              // eslint-disable-next-line react/no-array-index-key
              return <React.Fragment key={index}>{tabs[index]}</React.Fragment>;
            })}
          </div>
          <div className="album-create__options">
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
                10MB max per track, .mp3 only
              </div>
            </div>

            <div className="album-create__options-publish-container">
              <button type="submit" className="album-create__options-publish">
                Publish
              </button>
              <Link to="/" className="album-create__options-cancel">
                cancel
              </Link>
            </div>
          </div>
        </div>
        <div className="album-create__active-form">
          {tabsContent[selectedTab]}
        </div>
      </form>
    </div>
  );
};

export default AlbumCreate;
