import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumCreateAlbumTab from './album_create_album_tab';
import AlbumCreateTrackTab from './album_create_track_tab';
import AlbumCreateAlbumForm from './album_create_album_form';
import AlbumCreateTrackForm from './album_create_track_form';

const AlbumCreate = ({ user, createAlbum, albumErrors, clearAlbumErrors }) => {
  const [today] = useState(new Date().toISOString().slice(0, 10));
  const [selectedTab, setSelectedTab] = useState(0);
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [tabsContent, setTabsContent] = useState([]);

  const handleTrackDelete = (tabIndex) => {
    const tabsDup = tabs;
    tabsDup.splice(tabIndex, 1);
    setTabs(tabsDup);

    const tracksDup = tracks;
    tracksDup.splice(tabIndex - 1, 1);
    setTracks(tracksDup);
  };

  const handleTrackReplace = (trackIndex, newFile) => {
    const bytesToMB = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    const track = tracks[trackIndex];
    const newTrack = {
      ...track,
      fileName: newFile.name,
      fileSize: bytesToMB(newFile.size),
      audio: newFile,
    };
    const tracksDup = tracks;
    tracksDup[trackIndex] = newTrack;
    setTracks([...tracksDup]);
  };

  useEffect(() => {
    if (!album) {
      setAlbum({
        name: '',
        releaseDate: today,
        artUrl: '',
      });
    }
  }, [album, today]);

  useEffect(() => {
    if (album) {
      const updatedTabs = [
        <AlbumCreateAlbumTab
          band={user.band}
          album={album}
          tabIndex={0}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />,
      ];

      for (let i = 0; i < tabs.length - 1; i++) {
        updatedTabs.push(
          <AlbumCreateTrackTab
            track={tracks[i]}
            tabIndex={i + 1}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            handleTrackDelete={handleTrackDelete}
            handleTrackReplace={handleTrackReplace}
          />
        );
      }

      setTabs(updatedTabs);

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    user.band,
    album,
    tracks,
    selectedTab,
    today,
    albumErrors,
    clearAlbumErrors,
  ]);

  const handleTrackUpload = (e) => {
    const bytesToMB = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    const file = e.currentTarget.files[0];
    const newTrack = {
      name: '',
      fileName: file.name,
      fileSize: bytesToMB(file.size),
      audio: file,
    };
    setTracks([...tracks, newTrack]);
    setTabs([...tabs, null]);
    setTabsContent([...tabsContent, null]);
    setSelectedTab(tabs.length);
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
