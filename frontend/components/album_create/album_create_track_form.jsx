import React from 'react';

const AlbumCreateTrackForm = ({
  tracks,
  setTracks,
  tabIndex,
  errors,
  clearAlbumErrors,
}) => {
  const handleTrackNameChange = (e) => {
    if (
      errors[`tracks[${tabIndex}].name`] &&
      errors[`tracks[${tabIndex}].name`].length
    ) {
      clearAlbumErrors(errors, `tracks[${tabIndex}].name`);
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
    </div>
  );
};

export default AlbumCreateTrackForm;
