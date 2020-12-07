import React from 'react';

const AlbumCreateTrackForm = ({
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

  if (!tracks[tabIndex]) {
    return null;
  }

  return (
    <div className="track-form">
      <input
        type="text"
        className={`track-form__name${
          errors[`tracks[${tabIndex}].name`] &&
          errors[`tracks[${tabIndex}].name`].length
            ? ' track-form__input-error'
            : ''
        }`}
        value={tracks[tabIndex].name}
        onChange={handleTrackNameChange}
        placeholder="track name"
      />
      <div className="track-form__error">
        {errors[`tracks[${tabIndex}].name`] &&
        errors[`tracks[${tabIndex}].name`].length
          ? errors[`tracks[${tabIndex}].name`][0]
          : null}
      </div>
      <div className="track-form__track-info">
        <div className="track-form__track-label">file name:&nbsp;</div>
        <div className="track-form__track-description">
          {tracks[tabIndex].fileName}
        </div>
      </div>
      <div className="track-form__track-info">
        <div className="track-form__track-label">file size:&nbsp;</div>
        <div className="track-form__track-description">
          {tracks[tabIndex].fileSize}
        </div>
      </div>
      <div className="track-form__error">
        {errors[`tracks[${tabIndex}].audio`] &&
        errors[`tracks[${tabIndex}].audio`].length
          ? errors[`tracks[${tabIndex}].audio`][0]
          : null}
      </div>
    </div>
  );
};

export default AlbumCreateTrackForm;

// tracks[0].errors
