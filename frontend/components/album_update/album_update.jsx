import React, { useCallback, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
  updateAlbum,
  deleteAlbum,
  errors,
  clearErrors,
  clearAllErrors,
  history,
}) => {
  const [oldReleaseDate, setOldReleaseDate] = useState(null);
  const [today, setToday] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [tabs, setTabs] = useState([]);
  const [tabsContent, setTabsContent] = useState([]);

  const handleTrackDelete = useCallback(
    (tabIndex) => {
      const tabsDup = tabs;
      tabsDup.splice(tabIndex, 1);
      setTabs(tabsDup);

      const tracksDup = tracks;
      tracksDup.splice(tabIndex - 1, 1);
      setTracks(tracksDup);

      clearErrors(errors, [
        `tracks[${tabIndex - 1}].name`,
        `tracks[${tabIndex - 1}].errors`,
      ]);
    },
    [tabs, tracks, errors, clearErrors]
  );

  const handleTrackReplace = useCallback(
    (trackIndex, newFile) => {
      const bytesToMB = (bytes) => bytes / (1024 * 1024);
      const track = tracks[trackIndex];
      const newTrack = {
        ...track,
        audioFileName: newFile.name,
        audioFileSize: bytesToMB(newFile.size),
        audio: newFile,
      };
      const tracksDup = tracks;
      tracksDup[trackIndex] = newTrack;
      setTracks([...tracksDup]);
    },
    [tracks]
  );

  useEffect(() => {
    clearAllErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchAlbum(albumId);
  }, [fetchAlbum, albumId]);

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
          oldAlbum={oldAlbum}
          tabIndex={0}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          errors={errors}
        />,
      ];

      const updatedTabsContent = [
        <AlbumUpdateAlbumForm
          album={newAlbum}
          setAlbum={setAlbum}
          oldReleaseDate={oldAlbum.releaseDate}
          today={today}
          errors={errors}
          clearErrors={clearErrors}
        />,
      ];

      for (let i = 0; i < oldTracks.length; i++) {
        updatedTabs.push(
          <AlbumUpdateTrackTab
            track={oldTracks[i]}
            tabIndex={i + 1}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            handleTrackDelete={handleTrackDelete}
            handleTrackReplace={handleTrackReplace}
            errors
          />
        );

        updatedTabsContent.push(
          <AlbumUpdateTrackForm
            name={oldTracks[i].name}
            tracks={oldTracks}
            setTracks={setTracks}
            tabIndex={i}
            errors={errors}
            clearErrors={clearErrors}
          />
        );
      }

      setTabs(updatedTabs);
      setTabsContent(updatedTabsContent);
    }
  }, [
    oldAlbum,
    album,
    user.band,
    selectedTab,
    errors,
    clearErrors,
    allTracks,
    today,
    handleTrackDelete,
    handleTrackReplace,
  ]);

  useEffect(() => {
    if (album) {
      const updatedTabs = [
        <AlbumUpdateAlbumTab
          band={user.band}
          album={album}
          tabIndex={0}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          errors={errors}
        />,
      ];

      for (let i = 0; i < tracks.length; i++) {
        updatedTabs.push(
          <AlbumUpdateTrackTab
            track={tracks[i]}
            tabIndex={i + 1}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            handleTrackDelete={handleTrackDelete}
            handleTrackReplace={handleTrackReplace}
            errors={errors}
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
          errors={errors}
          clearErrors={clearErrors}
        />,
      ];

      for (let i = 0; i < updatedTabs.length - 1; i++) {
        updatedTabsContent.push(
          <AlbumUpdateTrackForm
            name={tracks[i].name}
            tracks={tracks}
            setTracks={setTracks}
            tabIndex={i}
            errors={errors}
            clearErrors={clearErrors}
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
    errors,
    clearErrors,
    tracks,
    oldReleaseDate,
    today,
  ]);

  const handleTrackUpload = (e) => {
    const bytesToMB = (bytes) => bytes / (1024 * 1024);
    const file = e.currentTarget.files[0];
    const newTrack = {
      name: '',
      audioFileName: file.name,
      audioFileSize: bytesToMB(file.size),
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

    formData.append('album[id]', oldAlbum.id);
    formData.append('album[name]', album.name);
    formData.append('album[user_id]', user.id);
    formData.append('album[release_date]', album.releaseDate);
    if (album.artFile) {
      formData.append('album[art]', album.artFile);
    }

    if (tracks.length === 0) {
      oldAlbum.trackIds.forEach((trackId, index) => {
        formData.append(`album[tracks_attributes][${index}][id]`, trackId);
        formData.append(`album[tracks_attributes][${index}][_destroy]`, 1);
      });
    } else {
      const trackNumDifference = oldAlbum.trackIds.length - tracks.length;
      if (trackNumDifference > 0) {
        const deleteTrackIds = oldAlbum.trackIds.slice(trackNumDifference);

        deleteTrackIds.forEach((trackId, index) => {
          formData.append(
            `album[tracks_attributes][${trackNumDifference + index}][id]`,
            trackId
          );
          formData.append(
            `album[tracks_attributes][${trackNumDifference + index}][_destroy]`,
            1
          );
        });
      }

      tracks.forEach((track, ord) => {
        if (track.id) {
          formData.append(`album[tracks_attributes][${ord}][id]`, track.id);
        }
        formData.append(`album[tracks_attributes][${ord}][name]`, track.name);
        formData.append(`album[tracks_attributes][${ord}][ord]`, ord + 1);
        formData.append(`album[tracks_attributes][${ord}][user_id]`, user.id);
        formData.append(
          `album[tracks_attributes][${ord}][album_id]`,
          oldAlbum.id
        );
        if (track.audio) {
          formData.append(`album[tracks_attributes][${ord}][duration]`, '1:23');
          formData.append(
            `album[tracks_attributes][${ord}][audio]`,
            track.audio
          );
        }
      });
    }

    updateAlbum(formData, albumId).then(() => {
      history.push(`/users/${user.id}/albums/${albumId}`);
    });
  };

  const handleAlbumDelete = () => {
    deleteAlbum(albumId).then(() => history.push('/'));
  };

  return (
    <div className="album-update">
      <div className="album-update__form">
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
                onChange={handleTrackUpload}
              />
              <label
                htmlFor="album-update__options-add-track-input"
                className="album-update__options-add-track-label"
              >
                add track
              </label>
              <span className="album-update__options-add-track-description">
                10MB max per track, .mp3 only
              </span>
            </div>

            <div className="album-update__options-publish-container">
              <button
                type="button"
                className="album-update__options-publish"
                onClick={handleSubmit}
              >
                Update
              </button>
              <button
                type="button"
                className="album-update__options-delete"
                onClick={handleAlbumDelete}
              >
                Delete
              </button>
              <Link
                to={`/users/${user.id}`}
                className="album-update__options-cancel"
              >
                cancel
              </Link>
            </div>
          </div>
        </div>
        <div className="album-update__active-form">
          {tabsContent[selectedTab]}
        </div>
      </div>
    </div>
  );
};

export default withRouter(AlbumUpdate);
