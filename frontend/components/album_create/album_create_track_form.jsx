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
      clearErrors(errors, `tracks[${tabIndex}].name`);
    }

    const track = tracks[tabIndex];
    const newTrack = {
      ...track,
      name: e.currentTarget.value,
    };
    const tracksDup = tracks;
    tracksDup[tabIndex] = newTrack;
    setTracks([...tracksDup]);
  };

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
        {errors[`tracks[${tabIndex}].errors`] &&
        errors[`tracks[${tabIndex}].errors`].length
          ? errors[`tracks[${tabIndex}].errors`][0]
          : null}
      </div>
    </div>
  );
};

export default AlbumCreateTrackForm;

// tracks[0].errors
