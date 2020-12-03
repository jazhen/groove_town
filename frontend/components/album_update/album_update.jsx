import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumUpdateAlbumForm from './album_update_album_form';
import AlbumUpdateAlbumTab from './album_update_album_tab';
import AlbumUpdateTrackForm from './album_update_track_form';
import AlbumUpdateTrackTab from './album_update_track_tab';

const AlbumUpdate = ({
  user,
  oldAlbum,
  allTracks,
  albumId,
  fetchAlbum,
  albumErrors,
  clearAlbumErrors,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetchAlbum(albumId);
  }, [fetchAlbum, albumId]);

  const [tracks, setTracks] = useState(null);
  const [tabs, setTabs] = useState([]);
  const [tabsContent, setTabsContent] = useState([]);
  const [oldReleaseDate, setOldReleaseDate] = useState(null);
  const [today, setToday] = useState(null);

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    if (oldAlbum && !album) {
      const newAlbum = {
        name: oldAlbum.name,
        releaseDate: oldAlbum.releaseDate,
        artFile: null,
        artUrl: oldAlbum.artUrl,
      };

      setAlbum(newAlbum);
      setOldReleaseDate(
        new Date(oldAlbum.releaseDate).toLocaleDateString('en-US', {
          timeZone: 'UTC',
        })
      );

      const oldTracks = [];
      oldAlbum.trackIds.forEach((trackId) => {
        oldTracks.push(allTracks[trackId]);
      });

      setTracks(oldTracks);

      const updatedTabs = [
        <AlbumUpdateAlbumTab
          band={user.band}
          name={oldAlbum.name}
          artUrl={oldAlbum.artUrl}
          releaseDate={oldAlbum.releaseDate}
          tabIndex={0}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />,
      ];

      for (let i = 0; i < oldTracks.length; i++) {
        updatedTabs.push(
          <AlbumUpdateTrackTab
            name={oldTracks[i].name}
            tracks={oldTracks}
            setTracks={oldTracks}
            // fileName={tracks[i].fileName}
            tabIndex={i + 1}
            tabs={tabs}
            setTabs={setTabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        );
      }

      setTabs(updatedTabs);

      const updatedTabsContent = [
        <AlbumUpdateAlbumForm
          album={newAlbum}
          setAlbum={setAlbum}
          oldReleaseDate={oldAlbum.releaseDate}
          today={today}
          errors={albumErrors}
          clearAlbumErrors={clearAlbumErrors}
        />,
      ];

      for (let i = 0; i < updatedTabs.length - 1; i++) {
        updatedTabsContent.push(
          <AlbumUpdateTrackForm
            name={oldTracks[i].name}
            tracks={oldTracks}
            setTracks={setTracks}
            tabIndex={i}
            errors={albumErrors}
            clearAlbumErrors={clearAlbumErrors}
          />
        );
      }

      setTabsContent(updatedTabsContent);
    }
  }, [
    oldAlbum,
    album,
    user.band,
    selectedTab,
    albumErrors,
    clearAlbumErrors,
    allTracks,
    tabs,
    today,
  ]);

  useEffect(() => {
    if (album) {
      const updatedTabs = [
        <AlbumUpdateAlbumTab
          band={user.band}
          name={album.name}
          artUrl={album.artUrl}
          releaseDate={album.releaseDate}
          tabIndex={0}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />,
      ];

      for (let i = 0; i < tracks.length; i++) {
        updatedTabs.push(
          <AlbumUpdateTrackTab
            name={tracks[i].name}
            tracks={tracks}
            setTracks={tracks}
            // fileName={tracks[i].fileName}
            tabIndex={i + 1}
            tabs={tabs}
            setTabs={setTabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        );
      }

      setTabs(updatedTabs);

      const updatedTabsContent = [
        <AlbumUpdateAlbumForm
          album={album}
          setAlbum={setAlbum}
          oldReleaseDate={oldReleaseDate}
          today={today}
          errors={albumErrors}
          clearAlbumErrors={clearAlbumErrors}
        />,
      ];

      for (let i = 0; i < updatedTabs.length - 1; i++) {
        updatedTabsContent.push(
          <AlbumUpdateTrackForm
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
    album,
    user.band,
    selectedTab,
    albumErrors,
    clearAlbumErrors,
    tracks,
    oldReleaseDate,
    today,
  ]);

  const handleSubmit = () => {};

  return (
    <div className="album-update">
      <form className="album-update__form" onSubmit={handleSubmit}>
        <div className="album-update__tabs-container">
          <div className="album-update__tabs">
            {tabs.map((tab, index) => {
              // eslint-disable-next-line react/no-array-index-key
              return <React.Fragment key={index}>{tabs[index]}</React.Fragment>;
            })}
          </div>
          <div className="album-update__options">
            <div className="album-update__options-add-track">
              <input
                type="file"
                id="album-update__options-add-track-input"
                className="album-update__options-add-track-input"
                accept="audio/mpeg"
                // onChange={handleTrackUpload}
              />
              <label
                htmlFor="album-update__options-add-track-input"
                className="album-update__options-add-track-label"
              >
                add track
              </label>
              <div className="album-update__options-add-track-description">
                10MB max per track, .mp3 only
              </div>
            </div>

            <div className="album-update__options-publish-container">
              <button type="submit" className="album-update__options-publish">
                Publish
              </button>
              <Link to="/" className="album-update__options-cancel">
                cancel
              </Link>
            </div>
          </div>
        </div>
        <div className="album-update__active-form">
          {tabsContent[selectedTab]}
        </div>
      </form>
    </div>
  );
};

export default AlbumUpdate;
