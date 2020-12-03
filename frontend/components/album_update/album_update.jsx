import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumUpdateAlbumForm from './album_update_album_form';
import AlbumUpdateAlbumTab from './album_update_album_tab';
// import AlbumUpdateTrackTab from './album_update_track_tab';

const AlbumUpdate = ({
  user,
  albums,
  albumTracks,
  albumId,
  fetchAlbum,
  albumErrors,
  clearAlbumErrors,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [album, setAlbum] = useState({
    name: '',
    releaseDate: '',
    artFile: null,
    artUrl: null,
  });

  useEffect(() => {
    fetchAlbum(albumId);

    if (Object.keys(albums).length) {
      setAlbum({
        name: albums[albumId].name,
        releaseDate: albums[albumId].releaseDate,
        artFile: null,
        artUrl: albums[albumId].artUrl,
      });
    }
  }, [fetchAlbum, albumId, albums]);

  // eslint-disable-next-line no-unused-vars
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const prevAlbums = Object.values(albumTracks);

    if (prevAlbums.length) {
      setTracks(prevAlbums);
    }
  }, [albumTracks]);

  const [tabs, setTabs] = useState([
    <AlbumUpdateAlbumTab
      band={user.band}
      name={album.name}
      tabIndex={0}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    />,
  ]);

  const [tabsContent, setTabsContent] = useState([
    <AlbumUpdateAlbumForm
      album={album}
      setAlbum={setAlbum}
      errors={albumErrors}
      clearAlbumErrors={clearAlbumErrors}
    />,
  ]);

  useEffect(() => {
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

    // for (let i = 0; i < tabs.length - 1; i++) {
    //   updatedTabs.push(
    //     <AlbumUpdateTrackTab
    //       name={tracks[i].name}
    //       tracks={tracks}
    //       setTracks={setTracks}
    //       fileName={tracks[i].fileName}
    //       tabIndex={i + 1}
    //       tabs={tabs}
    //       setTabs={setTabs}
    //       selectedTab={selectedTab}
    //       setSelectedTab={setSelectedTab}
    //     />
    //   );
    // }

    setTabs(updatedTabs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, album, tabs.length, selectedTab]);

  useEffect(() => {
    const updatedTabsContent = [
      <AlbumUpdateAlbumForm
        album={album}
        setAlbum={setAlbum}
        // today={today}
        errors={albumErrors}
        clearAlbumErrors={clearAlbumErrors}
      />,
    ];

    // for (let i = 0; i < tabs.length - 1; i++) {
    //   updatedTabsContent.push(
    //     <TrackForm
    //       name={tracks[i].name}
    //       tracks={tracks}
    //       setTracks={setTracks}
    //       tabIndex={i}
    //       errors={albumErrors}
    //       clearAlbumErrors={clearAlbumErrors}
    //     />
    //   );
    // }

    setTabsContent(updatedTabsContent);
  }, [album, tabs.length, albumErrors, clearAlbumErrors]);

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
