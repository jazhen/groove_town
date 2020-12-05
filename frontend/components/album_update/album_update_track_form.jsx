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

  if (!tracks[tabIndex]) {
    return null;
  }

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
      <div className="track-form__track-info">
        <div className="track-form__track-label">file name:&nbsp;</div>
        <div className="track-form__track-description">
          {tracks[tabIndex].audioFileName}
        </div>
      </div>
      <div className="track-form__track-info">
        <div className="track-form__track-label">file size:&nbsp;</div>
        <div className="track-form__track-description">
          {`${tracks[tabIndex].audioFileSize.toFixed(2)} MB`}
        </div>
      </div>
      <div className="track-form__error">
        {errors[`tracks[${tabIndex}].errors`] &&
        errors[`tracks[${tabIndex}].errors`].length
          ? errors[`tracks[${tabIndex}].errors`][0]
          : null}
      </div>
    </div>
  );
};

export default AlbumUpdateTrackForm;
