import React from 'react';

const TrackForm = ({ trackName, handleTrackNameChange }) => {
  return (
    <form className="album-form" onSubmit="">
      <input
        type="text"
        className="album-form__name"
        value={trackName}
        onChange={handleTrackNameChange}
        placeholder="track name"
      />
      {/* <div>{nameError}</div> */}
    </form>
  );
};

export default TrackForm;
