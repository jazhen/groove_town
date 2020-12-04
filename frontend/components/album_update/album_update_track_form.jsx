import React from 'react';

const AlbumUpdateTrackForm = ({
  tracks,
  setTracks,
  tabIndex,
  errors,
  clearErrors,
}) => {
  const handleTrackNameChange = (e) => {
    if (
      errors[`tracks[${tabIndex}].name`] &&
      errors[`tracks[${tabIndex}].name`].length
    ) {
      clearErrors(errors, [`tracks[${tabIndex}].name`]);
    }

    setTracks([
      ...tracks.slice(0, tabIndex),
      { ...tracks[tabIndex], name: e.currentTarget.value },
      ...tracks.slice(tabIndex + 1, tracks.length),
    ]);
  };

  return (
    <div className="album-update-track-form">
      <input
        type="text"
        className={`album-update-track-form__name${
          errors[`tracks[${tabIndex}].name`] &&
          errors[`tracks[${tabIndex}].name`].length
            ? ' album-update-track-form__input-error'
            : ''
        }`}
        value={tracks[tabIndex].name}
        onChange={handleTrackNameChange}
        placeholder="track name"
      />
      <div className="album-update-track-form__error">
        {errors[`tracks[${tabIndex}].name`] &&
        errors[`tracks[${tabIndex}].name`].length
          ? errors[`tracks[${tabIndex}].name`][0]
          : null}
      </div>
    </div>
  );
};

export default AlbumUpdateTrackForm;
