import React from 'react';

const TrackForm = ({ tracks, setTracks, tabIndex }) => {
  const handleTrackNameChange = (e) => {
    setTracks([
      ...tracks.slice(0, tabIndex),
      { ...tracks[tabIndex], name: e.currentTarget.value },
      ...tracks.slice(tracks.length),
    ]);
  };

  return (
    <div className="album-form">
      <input
        type="text"
        className="album-form__name"
        value={tracks[tabIndex].name}
        onChange={handleTrackNameChange}
        placeholder="track name"
      />
      {/* <div>{nameError}</div> */}
    </div>
  );
};

export default TrackForm;
