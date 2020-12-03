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

    setTracks([
      ...tracks.slice(0, tabIndex),
      { ...tracks[tabIndex], name: e.currentTarget.value },
      ...tracks.slice(tracks.length),
    ]);
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
